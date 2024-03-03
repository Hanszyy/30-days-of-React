import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
    keyPressMessage: '',
    copied: false
  };

  handleClick = () => {
    this.setState({ message: 'Button clicked!' });
  };

  handleMouseMove = () => {
    this.setState({ message: 'Mouse is moving!' });
  };

  handleCopy = () => {
    this.setState({ copied: true });
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    this.setState({ keyPressMessage: `Key pressed: ${e.key}` });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: `Form submitted with value: ${this.state.inputValue}` });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>

        <p onCopy={this.handleCopy}>Check copy right permission by copying this text</p>
        {this.state.copied && <p>Text copied!</p>}

        <p>{this.state.message}</p>

        <label> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        {this.state.keyPressMessage && <p>{this.state.keyPressMessage}</p>}

        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
