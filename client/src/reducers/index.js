import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import watsonReducer from './watsonReducer';

export default combineReducers({
  search: searchReducer,
  watson: watsonReducer
});