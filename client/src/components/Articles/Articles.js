import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';

class Articles extends Component {
  componentDidMount = () => {
    const { search } = this.props; // 나중에 search.term으로 밑에 api콜 해야함.
    if (search.term && !this.props.articles.payload) {
      this.props.fetchArticlesRequest('sushi');
    }
  }
  renderArticles = () => {
    return this.props.articles.payload.articles.map((article) => {
      return (
        <Article
          author={article.author}
          description={article.description}
          title={article.title}
          url={article.url}
          urlToImage={article.urlToImage}
          key={article.url}
          date={article.publishedAt}
        />
      );
    })
  }
  render() {
    return (
      <div id="news">
        {
          this.props.articles.status === 'WAITING' && <span>...LOADING...</span> // 여기에다가 로딩서클 나중에..
        }
        {
          this.props.articles.status === 'SUCCESS' && this.renderArticles()
        }
      </div>
    );
  }
}
Articles.defaultProps = {

};

Articles.propTypes = {

};
export default Articles;
