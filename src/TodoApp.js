import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './index.css';

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}