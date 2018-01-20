import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SearchForm from './components/SearchForm';

class App extends Component {

  componentDidMount() {
    axios.get('https://api.edamam.com/search?q=chicken&app_id=a710f53c&app_key=bb0272b8ff5e348bd73cf22523773c77&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free')
    .then(res => console.log(res));
    axios.post('/yelp').then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg bg-dark">
          <a className="navbar-brand">FoodWikipedia</a>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 bd-sidebar">
              <SearchForm />
            </div>
            <div className="col-7">
              <h2>Search Results For: ChungGookJang</h2>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active">Restaurants</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Recipes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Ingredients</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">News</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(App);
