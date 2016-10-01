import React from 'react';
import ReactDOM from 'react-dom';

// class HelloMessage extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });

const HelloMessage = ({ name }) => (
  <div>Hello {this.props.name}</div>
);

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('content'));
