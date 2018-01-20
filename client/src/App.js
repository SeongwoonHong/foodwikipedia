import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import axios from 'axios';
import logo from './logo.svg';
import Restaurants from './components/Restaurants';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

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
          <a className="navbar-brand" href="#">FoodWikipedia</a>
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
              <button>click</button>
            </div>
            <div className="col-10">
              <h2>Search Results For: ChungGookJang</h2>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Restaurants</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Recipes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Ingredients</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">News</a>
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
