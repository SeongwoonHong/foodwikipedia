import React, { Component } from 'react';

import Restaurant from './Restaurant/Restaurant';

class Restaurants extends Component {

  componentDidMount() {

    const { search, fetchYelpRequest } = this.props;

    if (search.term) {
      fetchYelpRequest(search.term, 'toronto');
    }

  }

  componentWillReceiveProps(nextProps) {

    console.log(nextProps);

    const { search, fetchYelpRequest } = this.props;

    if (nextProps.search.term !== search.term) {
      fetchYelpRequest(nextProps.search.term, 'toronto');
    }

  }

  render() {

    const { yelp } = this.props;
    console.dir(yelp);

    return (
      <div>
        {
          yelp.payload && yelp.payload.map((business, index) => {
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

export default Restaurants;
