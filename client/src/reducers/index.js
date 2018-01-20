import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import watsonReducer from './watsonReducer';
import yelpReducer from './yelpReducer';
import articlesReducer from './articlesReducer';
import youtubeReducer from './youtubeReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  watson: watsonReducer,
  search: searchReducer,
  yelp: yelpReducer,
  search: searchReducer,
  articles: articlesReducer,
  youtube: youtubeReducer,
  recipes: recipeReducer
});
