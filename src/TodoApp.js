import React from 'react';
import AddTodo from './components/AddTodo';
import './index.css';

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <AddTodo />
    </div>
  );
}