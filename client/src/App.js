import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as actions from './actions'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Restaurants from './components/Restaurants';
import './App.css';

import SearchForm from './components/SearchForm';

class App extends Component {
  callYelp = (term, location) => {
    this.props.fetchYelpRequest(term, location).then((data) => {
      console.log(data);
    });
  }

  onSubmitHandler = (term, location) => {
    this.props.fetchWatsonUrlRequest(term, location).then((data) => {
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
              <SearchForm
                onSubmit={this.props.onSubmitHandler}
                fetchWatsonFileRequest={this.props.fetchWatsonFileRequest}
              />
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
                    className="nav-link disabled">
                    News
                  </NavLink>
                </li>
              </ul>
              {
                this.props.yelp.status === 'SUCCESS' &&
                <Restaurants
                  businesses={this.props.yelp.payload.businesses}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    yelp: state.yelp
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
