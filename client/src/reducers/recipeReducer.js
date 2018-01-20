import * as types from '../actions/types';

const initialState = {
  recipe: {
    list: []
  }
};

export default function (state = initialState.recipe, action) {

  switch (action.type) {

    case types.RECIPES_RETURNED:
      return Object.assign({}, state, {
        list: action.payload
      });

    default:
      return state;

  }

}
