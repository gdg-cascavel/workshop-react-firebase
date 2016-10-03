import React, { PropTypes } from 'react'
import Header from './Header.jsx'
import TodoList from './TodoList.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        {/* This section should be hidden by default and shown when there are todos */}
        <TodoList />
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
}

export default App
