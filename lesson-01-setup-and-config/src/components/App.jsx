import React, { PropTypes } from 'react'
import HelloWorld from './HelloWorld.jsx'
import HelloMessage from './HelloMessage.jsx'
import TimedMessage from './TimedMessage.jsx'
import Timer from './Timer.jsx'
import Todo from './Todo.jsx'

const App = (props) => {
  return (
    <div>
      <h1>Welcome to this React Workshop!</h1>

      <p>If you are seeing this, you are set!</p>

      <h2>Sample Components</h2>
      <hr />
      <HelloWorld />
      <HelloMessage name="John" />
      <TimedMessage name="John" />
      <Timer />
      <Todo />
    </div>
  )
}

export default App
