import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Youtube.css';

class Youtube extends Component {
  componentDidMount = () => {
    const { search } = this.props;
    if (search.term && !this.props.youtube.payload) {
      this.props.fetchYoutubeRequest('sushi').then((res) => {
        // console.log(res.payload.items);
      });
    }

  }
  renderYoutube = () => {
    return this.props.youtube.payload.items.map((item, index) => {
      const { title, description, thumbnails, channelTitle, publishedAt } = item.snippet;
      return (
        <div className="list-group" key={item.id.videoId}>
          <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank"><img className="youtube-image" src={thumbnails.medium.url} alt={thumbnails.medium.url} /></a>
          <div className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" className="youtube-title"><h5 className="mb-1">{ title }</h5></a>
              <small>{ channelTitle }</small>
            </div>
            <div>{ publishedAt }</div>
          </div>
        </div>
      );
    })
  }
  render() {
    return (
      <div id="youtube">
        {
          this.props.youtube.status === 'WAITING' && <span>...LOADING...</span>
        }
        {
          this.props.youtube.status === 'SUCCESS' && this.renderYoutube()
        }
      </div>
    );
  }
}
Youtube.defaultProps = {

};

Youtube.propTypes = {

};
export default Youtube;
