import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import * as actions from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from './components/Articles';
import Restaurants from './components/Restaurants';
import Youtube from './components/Youtube';
import './App.css';
import SearchForm from './components/SearchForm';
import Recipes from './components/Recipes';

class App extends Component {

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
              <SearchForm history={ history } />
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
                <li className="nav-item">
                  <NavLink
                    to="/youtube"
                    className="nav-link">
                    Videos
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route path="/recipes" component={ Recipes } />
                <Route path="/restaurants" component={ Restaurants } />
                <Route path="/news" component={Articles} />
                <Route path="/youtube" component={Youtube} />
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
    search: state.search,
    youtube: state.youtube
  };
};

export default connect(mapStateToProps, null)(App);
