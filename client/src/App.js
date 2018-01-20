import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as actions from './actions'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Restaurants from './components/Restaurants';
import Youtube from './components/Youtube';
import './App.css';

import SearchForm from './components/SearchForm';

class App extends Component {
  callYelp = (term, location) => {
    this.props.fetchYelpRequest(term, location).then((data) => {
      // console.log(data);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg bg-dark">
          <Link to="/">
            FoodWikipedia
          </Link>
        </header>
        <span
          onClick={() => this.callYelp('sushi', 'toronto')}
        >
          CAll YELP
        </span>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 bd-sidebar">
              <SearchForm />
              <button>click</button>
            </div>
            <div className="col-7">
              <h2>Search Results For: ChungGookJang</h2>
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
                    Articles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/youtube"
                    className="nav-link">
                    Youtube
                  </NavLink>
                </li>
              </ul>
              {/* {
                this.props.yelp.status === 'SUCCESS' &&
                <Restaurants
                  businesses={this.props.yelp.payload.businesses}
                />
              } */}
              <Switch>
                <Route path="/restaurants" render={() => this.props.yelp.status === 'SUCCESS' && <Restaurants businesses={this.props.yelp.payload.businesses} />} />
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
    yelp: state.yelp,
    youtube: state.youtube
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchYelpRequest: (term, location) => {
      return dispatch(actions.fetchYelpRequest(term, location));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
