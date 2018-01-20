import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Restaurant.css';

class Restaurant extends Component {
  render() {
    const { categories, name, phone, price, rating, url, image_url, location } = this.props;
    return (
      <div className="list-group">
        <img className="restaurant-image" src={image_url} alt={name} />
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{ name }</h5>
            <small>{ rating }</small>
          </div>
          {
              categories.map((category) => {
                return (
                  <span
                    className="mb-1"
                    key={category.title}
                  >
                    { category.title }
                  </span>
                );
              })
          }
          <p>{ phone }</p>
        </a>
      </div>
    );
  }
}
Restaurant.defaultProps = {
  categories: [],
  name: 'ck',
  phone: '+16478711234',
  price: '$$',
  rating: 5,
  url: 'http://www.google.ca',
  location: {}
};

Restaurant.propTypes = {
  categories: PropTypes.array,
  name: PropTypes.string,
  phone: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  url: PropTypes.string,
  location: PropTypes.object
};
export default Restaurant;
