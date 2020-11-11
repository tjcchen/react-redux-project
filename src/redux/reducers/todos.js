import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:

      console.log('addTodo reducer: ');
      console.log('action:');
      console.log(action);
      // action: { type: 'ADD_TODO', payload: { id: 0, content: 'user input string' } }

      const { id, content } = action.payload;

      console.log('return data: ');
      console.log({
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      });

      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    
    case TOGGLE_TODO:
      return {

      };

    default:
      return state;
  }
}