import React, { Component } from 'react';

import './Recipes.css'

class Recipes extends Component {

  componentDidMount() {

    const { search, fetchRecipes, recipes } = this.props;
    if (search.term && !recipes.list.length) {
      fetchRecipes(search.term);
    }

  }

  componentWillReceiveProps(nextProps) {

    const { search, fetchRecipes } = this.props;

    if (nextProps.search.term !== search.term) {
      fetchRecipes(nextProps.search.term);
    }

  }

  render() {

    const { recipes } = this.props;

    return (
      <ul>
        {
          recipes.list.map(recipe => {
            return ([
              <div key={ recipe.title.length } className="list-group">
                <img className="restaurant-image" src={recipe.image_url} alt={recipe.title} />,
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ recipe.title }</h5>
                    <small>{ recipe.social_rank }</small>
                  </div>
                  <p>{ recipe.source_url }</p>
                </a>
              </div>
            ])
          })
        }
      </ul>
    );
  }
}

export default Recipes;
