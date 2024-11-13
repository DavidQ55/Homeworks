const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [action.payload, ...state.todos],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
export default todoReducer;  