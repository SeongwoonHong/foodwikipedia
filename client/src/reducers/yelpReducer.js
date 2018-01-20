/* eslint-disable max-len */
import * as types from '../actions/types';

const initialState = {
  status: '',
  payload: ''
};

export default function yelpReducer(state = initialState, action) {

  switch (action.type) {

    case types.FETCH_YELP:
      return {
        ...state.yelp,
        status: 'INIT'
      };

    case types.FETCH_YELP_SUCCESS:
      console.log(action.payload);
      return {
        ...state.yelp,
        status: 'SUCCESS',
        payload: action.payload.businesses
      };

    case types.FETCH_YELP_FAILURE:
      return {
        ...state.yelp,
        status: 'FAILURE',
        payload: action.error
      };

    default:
      return state;

  }

}
