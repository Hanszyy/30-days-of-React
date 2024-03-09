import React, { Component } from 'react';
import './App.css'; // Import CSS file for styling

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      message: 'Hello, World!',
      clickedTime: null,
      goodbyeCount: 0 // Initialize count of "goodbye world"
    };
  }

  componentDidMount() {
    console.log('Component did mount');
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.intervalID);
  }

  handleClick = () => {
    // Update message to include count of "goodbye world"
    this.setState(prevState => ({
      message: `Goodbye, World ${prevState.goodbyeCount + 1}`, // Increment count by 1
      clickedTime: new Date().toLocaleTimeString(),
      goodbyeCount: prevState.goodbyeCount + 1 // Increment goodbyeCount by 1
    }));
  };

  render() {
    return (
      <div className="center-content"> {/* Apply center-content class */}
        <h2>Component Lifecycle Demo</h2>
        <p>{this.state.message}</p>
        {this.state.clickedTime && <p>Time clicked: {this.state.clickedTime}</p>}
        <p>Current time: {this.state.time}</p>
        <button onClick={this.handleClick}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleDemo;

/* 
Reasons for using component lifecycle methods:
- Mounting: Initial phase where the component is created and inserted into the DOM. 
  - Constructor: Initialize state or bind event handlers.
  - componentDidMount(): Perform initial setup, like fetching data from a server or setting up timers.
- Updating: Occurs when component's state or props change. 
  - componentDidUpdate(): Respond to state or prop changes and perform side effects.
- Unmounting: Occurs when a component is removed from the DOM. 
  - componentWillUnmount(): Clean up any resources, such as event listeners or timers.
*/
