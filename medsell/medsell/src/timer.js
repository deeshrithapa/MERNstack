import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
      timerId: null,
    };
  }

  startTimer = () => {
    if (!this.state.timerId) {
      const timerId = setInterval(() => {
        this.setState((prevState) => ({
          timerValue: prevState.timerValue + 1,
        }));
      }, 1000);

      this.setState({ timerId });
    }
  };

  stopTimer = () => {
    clearInterval(this.state.timerId);
    this.setState({ timerId: null });
  };

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.timerValue} seconds</h1>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default Timer;
