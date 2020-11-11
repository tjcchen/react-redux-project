import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { getTodos } from '../redux/selectors';

const TodoList = ({ todos }) => (
  <ul className='todo-list'>
    {
      todos && todos.length ?
      todos.map((todo, index) => {
        return <Todo key={ `todo-${todo.id}` } todo={ todo } />;
      }) :
      'No todos, yay!'
    }
  </ul>
);

// map current state data to props, retrieve state data
// this part of code logic will be loaded along with reducers when page is ready
const mapStateToProps = state => {
  console.log('TodoList Component: ');
  console.log(state);

  const { byIds, allIds } = state.todos || {};
  const todos = allIds && allIds.length ?
    allIds.map(id => {
      // { ...byIds[id], id } => { content: "todo item 0", completed: false, id: 0 }
      // return byId object with id property explicitly added inside the object
      return byIds ? { ...byIds[id], id } : null
    }) :
    null;
  
  console.log('todos inside mapStateToProps: ');
  console.log(todos);
  
  // todos: [{ 0: { id: 0, content: 'todo item 0', completed: false } }, { 1: { id: 1, content: 'todo item 2': completed: false } }];
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
// export default connect(state => ({ todos: getTodos(state) }))(TodoList);