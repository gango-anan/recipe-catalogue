const initialState = {
  categories: [],
  meals: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MEALS':
      return {
        ...state,
        meals: action.payload,
      };
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
