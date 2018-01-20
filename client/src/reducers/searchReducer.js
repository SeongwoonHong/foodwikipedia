import * as types from '../actions/types';

const initialState = {
  search: {
    isSearching: false,
    term: '',
    file: '',
    type: 'text',
  }
};

export default function (state = initialState.search, action) {

  switch (action.type) {

    case types.CHANGE_SEARCH_TYPE:
      return Object.assign({}, state, {
        type: action.payload
      });

    case types.REGISTER_SEARCH_TERM:
      return Object.assign({}, state, {
        [action.payload.type]: action.payload.value
      });

    case types.EXECUTE_SEARCH:
      return Object.assign({}, state, {
        isSearching: false
      });

    default:
      return state;

  }

}