import { combineReducers } from 'redux';
import recipeReducer from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({ recipes: recipeReducer, filters: filterReducer });

export default rootReducer;