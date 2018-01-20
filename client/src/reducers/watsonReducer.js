/* eslint-disable max-len */
import update from 'react-addons-update';
import * as types from '../actions/types';

const initialState = {
  newPost: {
      status: 'INIT',
      data: null,
      error: null
    }
};

export default function watsonReducer(state = null, action) {
  switch (action.type) {
    case types.FETCH_WATSON:
      return [ action.payload.data, ...state];
  }
  return state;
}
