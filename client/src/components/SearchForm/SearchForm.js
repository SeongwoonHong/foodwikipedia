import React, { Component } from 'react';

import './SearchForm.css'

class SearchForm extends Component {

  componentWillReceiveProps(nextProps) {
    const { history, search, executeSearch } = this.props;
    if (nextProps.search.term !== search.term) {
      executeSearch();
      if (history.location.pathname === '/') {
        history.push('/restaurants');
      }
    }
  }

  onImageUpload = (e) => {

    this.setState({ isLoading: true });

    const reader = new FileReader();
    const image = e.target.files[0];

    reader.onloadend = () => {
      this.props.registerSearchTerm('file', reader.result);
    };
    reader.readAsDataURL(image);

  };

  onSubmitHandler = (e) => {

    e.preventDefault();
    console.log(this.props.search.file);
    const fileData = new FormData();
    fileData.append('images_file', this.props.search.file);
    this.props.onSubmitHandler(fileData);

    // const { registerSearchTerm }  = this.props;
    // registerSearchTerm('term', document.getElementById('searchTerm').value);

  };


  render() {

    const { search, changeSearchType } = this.props;

    return (
      <form
        noValidate
        className="SearchForm"
        onSubmit={ this.onSubmitHandler }>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example">
          <button
            type="button"
            className={ `btn ${search.type === 'text' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={ () => changeSearchType('text')}>
            Search by name
          </button>
          <button
            type="button"
            className={ `btn ${search.type !== 'text' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={ () => changeSearchType('file')}>
            Search by image
          </button>
        </div>
        {
          this.props.search.type === 'text'
            ? (
              <input
                type="text"
                id="searchTerm"
                placeholder="Enter the food name"
                className="form-control"
                name="term" />
              )
            : (
              <div className="input-group mb-3">
                {
                  search.file
                    ? (
                      <img
                        src={ search.file }
                        alt="food" />
                    )
                    : null
                }
                <div className="custom-file">
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    className="custom-file-input"
                    onChange={ this.onImageUpload }/>
                  <label className="custom-file-label" htmlFor="inputGroupFile02">
                    Choose file
                  </label>
                </div>
                <button type="submit">submit</button>
              </div>
            )
        }
        <button
          type="submit">
          click
        </button>
      </form>
    );
  }
}

export default SearchForm;
