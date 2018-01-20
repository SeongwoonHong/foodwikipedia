/* eslint-disable max-len */
import * as types from '../actions/types';

const initialState = {
  status: null,
  payload: null
};

export default function yelpReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_YELP:
      return {
        ...state.yelp,
        status: 'INIT'
      };
    case types.FETCH_YELP_SUCCESS:
      return {
        ...state.yelp,
        status: 'SUCCESS',
        payload: action.payload
      }
    case types.FETCH_YELP_FAILURE:
      return {
        ...state.yelp,
        status: 'FAILURE',
        payload: action.error
      }
  }
  return state;
}
