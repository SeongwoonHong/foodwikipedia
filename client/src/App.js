import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import * as actions from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SearchForm from './components/SearchForm';
import Restaurants from './components/Restaurants';
import Recipes from './components/Recipes';

class App extends Component {
  callYelp = (term, location) => {
    this.props.fetchYelpRequest(term, location).then((data) => {
      console.log(data);
    });
  }

  onSubmitHandler = (submitData) => {
    this.props.fetchWatsonFileRequest(submitData).then((data) => {
    });
  }
  render() {

    const { history, search } = this.props;

    return (
      <div className="App">
        <header className="navbar navbar-expand-lg bg-dark">
          <Link to="/">
            FoodWikipedia
          </Link>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 bd-sidebar">
              <SearchForm
                onSubmitHandler={this.onSubmitHandler}
                fetchWatsonFileRequest={this.props.fetchWatsonFileRequest}
                history={ history }
              />
            </div>
            <div className="col-7">
              {
                search.term
                  ? <h2>Search Results For: { search.term }</h2>
                  : null
              }
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink
                    to="/restaurants"
                    className="nav-link">
                    Restaurants
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/recipes"
                    className="nav-link">
                    Recipes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/nutrition"
                    className="nav-link">
                    Nutrition
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/news"
                    className="nav-link">
                    News
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route path="/recipes" component={ Recipes } />
                <Route exact path="/restaurants" component={ Restaurants } />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchYelpRequest: (term, location) => {
      return dispatch(actions.fetchYelpRequest(term, location));
    },
    fetchWatsonUrlRequest: () => {
      return dispatch(actions.fetchWatsonUrlRequest());
    },
    fetchWatsonFileRequest: (value) => {
      console.log(value);
      return dispatch(actions.fetchWatsonFileRequest(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
