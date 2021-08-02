import { combineReducers } from 'redux';
import recipeReducer from './recipes';

const rootReducer = combineReducers({ recipes: recipeReducer });

export default rootReducer;