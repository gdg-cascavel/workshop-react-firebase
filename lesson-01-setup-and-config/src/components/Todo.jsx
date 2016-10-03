import React, {PropTypes} from 'react';

class TodoList extends React.Component {
  render() {
    const createItem = item => <li key={item.id}>{item.text}</li>;
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      text: ''
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{`Add #${this.state.items.length + 1}`}</button>
        </form>
      </div>
    );
  }
}

Todo.propTypes = {
};
