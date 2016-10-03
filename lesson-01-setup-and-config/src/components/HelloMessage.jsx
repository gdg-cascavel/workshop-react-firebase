import React from 'react'

// class HelloMessage extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }

const HelloMessage = ({ name }) => (
  <div>Hello {name}</div>
)

export default HelloMessage
