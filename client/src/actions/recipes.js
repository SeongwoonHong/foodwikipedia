import * as types from './types';
import axios from 'axios';

export const fetchRecipes = (term) => {
  return (dispatch) => {
    axios
    .get(`/api/recipes/search/${term}`)
    .then(res => {
      dispatch(recipesReturned(res.data.recipes));
    });
  };
};

export const recipesReturned = (recipes) => {
  return {
    type: types.RECIPES_RETURNED,
    payload: recipes
  }
};