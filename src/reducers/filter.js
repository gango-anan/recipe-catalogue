const initialState = 'All recipes';

const filterReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_CATEGORY') {
    return action.payload;
  }

  return state;
};

export default filterReducer;
