import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SearchForm from './components/SearchForm';

class App extends Component {

  componentDidMount() {
    axios.get('https://api.edamam.com/search?q=chicken&app_id=a710f53c&app_key=bb0272b8ff5e348bd73cf22523773c77&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free')
    .then(res => console.log(res));
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
              <button onclick={this.props.fetchWatsonRequest()}>click</button>
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

const mapStateToProps = (state) => {
  return {
    watson: state.watson
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWatsonRequest: () => {
      // UserList() {
      // fetch('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8d7aced8efa9ce11cca985d203dce5989cc20148&url=http://img.hankyung.com/photo/201710/01.14980249.1.jpg&version=2016-05-20&classifier_ids=food',
      //   { method: 'get', mode: 'no-cors', })
      //   .then((resp) => {
      //   console.log(resp);
      // });

      // $.getJSON('https://randomuser.me/api/')
      //   .then(({ results }) => {});

      dispatch(actions.fetchWatsonRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);