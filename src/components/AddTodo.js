import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };
  }

  updateInput = input => {
    this.setState({ input });
  }

  handleAddTodo = () => {
    console.log('components: handle AddTodo');

    // dispatches actions to addTodo
    // this.props.addTodo defined in actions.js
    this.props.addTodo(this.state.input);

    // sets state back to empty string
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input
          onChange={ e => this.updateInput(e.target.value) }
          value={ this.state.input }
        />
        <button className="add-todo" onClick={ this.handleAddTodo }>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo); // react-redux connect method will bind actions to this.props