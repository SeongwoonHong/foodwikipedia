import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import watsonReducer from './watsonReducer';
import yelpReducer from './yelpReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
  watson: watsonReducer,
  yelp: yelpReducer,
  search: searchReducer,
  articles: articlesReducer
});
