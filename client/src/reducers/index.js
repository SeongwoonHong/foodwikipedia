import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import watsonReducer from './watsonReducer';
import yelpReducer from './yelpReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  watson: watsonReducer,
  search: searchReducer,
  yelp: yelpReducer,
  recipes: recipeReducer
});
