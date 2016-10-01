import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Home extends React.Component {
  render () {
    return <p>Home</p>;
  }
}

class Vote extends React.Component {
  render () {
    return <p>Vote</p>;
  }
}

class Users extends React.Component {
  render () {
    return <p>Users</p>;
  }
}

class User extends React.Component {
  render () {
    return <p>User</p>;
  }
}

class Teams extends React.Component {
  render () {
    return <p>Teams</p>;
  }
}

class Team extends React.Component {
  render () {
    return <p>Team</p>;
  }
}

class Fields extends React.Component {
  render () {
    return <p>Fields</p>;
  }
}

class Stores extends React.Component {
  render () {
    return <p>Stores</p>;
  }
}

class Calendar extends React.Component {
  render () {
    return <p>Calendar</p>;
  }
}

class App extends React.Component {
  render () {
    return <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <Route path="vote" component={Vote}/>
        <Route path="users" component={Users}>
          <Route path="/users/:userId" component={User}/>
        </Route>
        <Route path="teams" component={Teams}>
          <Route path="/teams/:teamId" component={Team}/>
        </Route>
      </Route>
    </Router>;
  }
}

render(<App/>, document.getElementById('app'));
