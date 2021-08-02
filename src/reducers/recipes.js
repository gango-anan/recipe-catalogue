const initialState = { recipes: [] };

const recipeReducer = (state = initialState, action) => {
  if(action.type === 'ADD_RECIPE') {
    return {
      recipes: [...state.recipes, action.payload]
    };
  }
};