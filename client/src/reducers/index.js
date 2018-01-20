import { combineReducers } from 'redux';

import watsonReducer from './watsonReducer';
import yelpReducer from './yelpReducer';

export default combineReducers({
  watson: watsonReducer,
  yelp: yelpReducer
});
