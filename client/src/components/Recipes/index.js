import { connect } from 'react-redux';
import * as actions from '../../actions';

import Recipes from './Recipes';

function mapStateToProps(state) {
  return {
    search: state.search,
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: (term) => dispatch(actions.fetchRecipes(term))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);