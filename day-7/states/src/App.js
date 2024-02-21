import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      history: [],
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      history: [...prevState.history, prevState.count + 1],
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      history: [...prevState.history, prevState.count - 1],
    }));
  };

  multiplyCount = () => {
    this.setState((prevState) => ({
      count: prevState.count * 2,
      history: [...prevState.history, prevState.count * 2],
    }));
  };

  divisionCount = () => {
    this.setState((prevState) => ({
      count: prevState.count / 2,
      history: [...prevState.history, prevState.count / 2],
    }));
  };

  render() {
    const { count, history } = this.state;

    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.multiplyCount}>Multiply</button>
        <button onClick={this.divisionCount}>Division</button>
        <h3>History:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{index + 1}. {item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default State;
