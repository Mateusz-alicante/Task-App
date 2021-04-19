const initialState = {
    categories: []
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
          return { ...state, categories: [...state.categories, action.newCategory] };
        default:
          return state;
}}