import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => {
  console.log('addTodo action: ');
  console.log(content);

  return {
    type: ADD_TODO, // this action will find ADD_TODO in reducers
    payload: {
      id: nextTodoId++,
      content
    }
  };
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});