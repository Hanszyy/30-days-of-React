import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; // Updated import

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      email: '',
      password: '',
      error: null
    };
  }

  componentDidMount() {
    // Your Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAYShMfF2Ov0k1rNgxBse8hFP5S2140iNI",
      authDomain: "day-14-react.firebaseapp.com",
      projectId: "day-14-react",
      storageBucket: "day-14-react.appspot.com",
      messagingSenderId: "1078896294113",
      appId: "1:1078896294113:web:3e36696008426ce6125fa0",
      measurementId: "G-DRPD81KHSY"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignIn = async () => {
    const { email, password } = this.state;
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      this.setState({ currentUser: user, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleSignUp = async () => {
    const { email, password } = this.state;
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      this.setState({ currentUser: user, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { email, password, error, currentUser } = this.state;
    return (
      <Router> {/* Updated BrowserRouter as Router */}
        <div>
          <h1>Authentication Example</h1>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          {error && <div>{error}</div>}
          <button onClick={this.handleSignIn}>Sign In</button>
          <button onClick={this.handleSignUp}>Sign Up</button>
        </div>

        {/* Define routes */}
        <Route path="/about">
          {currentUser ? <About /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    );
  }
}

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

export default App;
