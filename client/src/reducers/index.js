import { combineReducers } from 'redux';

import watsonReducer from './watsonReducer';

export default combineReducers({
  watson: watsonReducer
});
