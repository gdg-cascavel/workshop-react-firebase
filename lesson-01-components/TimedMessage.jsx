import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TimedMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: 'Bye',
      });
    }, 2000);
  }

  render() {
    return <div>{this.state.message} {this.props.name}</div>;
  }
}

ReactDOM.render(<TimedMessage name="John" />, document.getElementById('content'));
