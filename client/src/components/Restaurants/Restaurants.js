import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant/Restaurant';

class Restaurants extends Component {
  render() {
    return (
      <div>
        {
          this.props.businesses.map((business, index) => {
            return (
              <Restaurant
                categories={ business.categories }
                name={ business.name }
                phone={ business.phone }
                price={ business.price }
                rating={ business.rating }
                image_url={ business.image_url }
                url={ business.url }
                location={ business.location }
                key={ business.url }
              />
            );
          })
        }
      </div>
    );
  }
}
Restaurants.defaultProps = {
  businesses: []
};

Restaurants.propTypes = {
  businesses: PropTypes.array
};
export default Restaurants;
