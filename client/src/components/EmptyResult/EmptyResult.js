import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EmptyResult.css';

class EmptyResult extends Component {
  render() {
    return (
      <div className="empty-result alert alert-success" role="alert">
        <h4 className="alert-heading">Empty Result</h4>
        <p>Try to use the search bar above!</p>
        <hr />
      </div>
    );
  }
}

export default EmptyResult;
