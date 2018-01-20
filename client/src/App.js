import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg bg-dark">
          <a className="navbar-brand" href="#">FoodWikipedia</a>
        </header>
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
                    <label className="custom-file-label" for="inputGroupFile02">
                      Choose file
                    </label>
                  </div>
                </div>
              </form>
              <button onclick={this.props.fetchWatsonUrlRequest()}>click</button>
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
    fetchWatsonUrlRequest: () => {
      // UserList() {
      // fetch('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8d7aced8efa9ce11cca985d203dce5989cc20148&url=http://img.hankyung.com/photo/201710/01.14980249.1.jpg&version=2016-05-20&classifier_ids=food',
      //   { method: 'get', mode: 'no-cors', })
      //   .then((resp) => {
      //   console.log(resp);
      // });

          // $.getJSON('https://randomuser.me/api/')
          //   .then(({ results }) => {});

      dispatch(actions.fetchWatsonUrlRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
