import React, { PropTypes } from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count"><strong>0</strong> item left</span>
        {/* Remove this if you don't implement routing */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/* Hidden if no completed items are left ↓ */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

Footer.propTypes = {
};
