import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsElapsed: 0,
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

Timer.propTypes = {
};
