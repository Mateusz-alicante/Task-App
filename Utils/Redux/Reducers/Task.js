const initialState = {
    tasks: []
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
          return { ...state, tasks: [...state.tasks, action.newTask] };
        default:
          return state;
}}