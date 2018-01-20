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
              <form>
                <input
                  type="text"
                  placeholder="Enter the food name"
                  className="form-control" />
                <p>or</p>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile02" />
                    <label className="custom-file-label" htmlFor="inputGroupFile02">
                      Choose file
                    </label>
                  </div>
                </div>
              </form>
              <div className="col-3 bd-sidebar">
                <SearchForm />
                <button onClick={this.props.fetchWatsonRequest()}>click</button>
              </div>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
