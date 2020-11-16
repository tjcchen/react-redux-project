import React from 'react';
import cx from 'classnames';

const Todo = ({ todo }) => (
  <li
    className="todo-item"
    onClick={ () => { /* dispatch action to toggle todo, the below { " " } is to add some spaces */ } }
  >
    { todo && todo.completed ? "👌" : "👋" } { " " }
    <span
      className={
        cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed'
        )
      }
    >
      { todo.content }
    </span>
  </li>
);

export default Todo;