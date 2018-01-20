import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class Article extends Component {
  render() {
    const { author, description, title, url, urlToImage, date } = this.props;
    return (
      <div className="article">
        <div className="list-group">
          <div href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <a href={url} className="mb-1 article-url">{ title }</a>
              <small>{ author }</small>
            </div>
            <p className="mb-1">{ description }</p>
            <div>{ date }</div>
          </div>
        </div>
      </div>
    );
  }
}
Article.defaultProps = {
  author: 'author',
  description: 'description',
  title: 'title',
  url: 'url',
  urlToImage: 'url'
};

Article.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
};
export default Article;
