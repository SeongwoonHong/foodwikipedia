import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const yelpApi = 'https://api.yelp.com/v3/businesses/search';
const yelpClientId = 'K2qFtqlPaCCStt8UsO02-Q';
const yelpApiKey = 'BqPj5udquNHHVWamBDJFuzguSZPmMxACorv7NqYWz4WVpsxsw1QFu-b06Txb6xGjG2hemRE5beTVcN-GdPVwu6vZ6zGENAybB46_5lUFANw4Dy0wbj7oV4qghtxiWnYx';
const yelpClientSecret = 'n8z79QdxVPNBd9fz2gd5JOCWEAb3QUPDtj5IbIYSEpUWE7nTh2nTYBtMrLGbE4TJ';
const tokenEndpoint = 'https://api.yelp.com/oauth2/token';

class App extends Component {
  constructor(props) {
    super(props);
    this.instance;
  }
  componentDidMount = () => {
    // axios.post(tokenEndpoint, {'client_id': yelpClientId, 'client_secret':yelpClientSecret}).then((res) => {
    //   console.log(res);
    // }).catch((e) => {
    //   console.log(e);
    // });
    // this.instance = axios.create({
    //   headers: {
    //     'Authorization': `Bearer ${yelpApiKey}`
    //   }
    //   // headers: {'Authorization: `Bearer ${clientSecret}`'}
    // });
    // this.instance()
  }
  callYelp = (term, location) => {
    // categories=${categories}&open_now=${open_now}&open_at=${open_at}
    const data = axios.get(`${yelpApi}/?term=${term}&location=${location}`,{ headers: { 'Authorization': `Bearer ${yelpApiKey}` }});
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <span onClick={() => this.callYelp('sushi', 'toronto')} style={{'backgroundColor': 'lightblue', 'display': 'inline-block'}}>call yelp</span>
        </p>
      </div>
    );
  }
}

export default App;
/*
{
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
*/

/*
parameters
term	string	Optional. Search term (e.g. "food", "restaurants"). If term isn’t included we search everything. The term keyword also accepts business names such as "Starbucks".
location	string	Required if either latitude or longitude is not provided. Specifies the combination of "address, neighborhood, city, state or zip, optional country" to be used when searching for businesses.
latitude	decimal	Required if location is not provided. Latitude of the location you want to search nearby.
longitude	decimal	Required if location is not provided. Longitude of the location you want to search nearby.
radius	int	Optional. Search radius in meters. If the value is too large, a AREA_TOO_LARGE error may be returned. The max value is 40000 meters (25 miles).
categories	string	Optional. Categories to filter the search results with. See the list of supported categories. The category filter can be a list of comma delimited categories. For example, "bars,french" will filter by Bars OR French. The category identifier should be used (for example "discgolf", not "Disc Golf").
locale	string	Optional. Specify the locale to return the business information in. See the list of supported locales.
limit	int	Optional. Number of business results to return. By default, it will return 20. Maximum is 50.
offset	int	Optional. Offset the list of returned business results by this amount.
sort_by	string	Optional. Sort the results by one of the these modes: best_match, rating, review_count or distance. By default it's best_match. The rating sort is not strictly sorted by the rating value, but by an adjusted rating value that takes into account the number of ratings, similar to a bayesian average. This is so a business with 1 rating of 5 stars doesn’t immediately jump to the top.
price	string	Optional. Pricing levels to filter the search result with: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$. The price filter can be a list of comma delimited pricing levels. For example, "1, 2, 3" will filter the results to show the ones that are $, $$, or $$$.
open_now	boolean	Optional. Default to false. When set to true, only return the businesses open now. Notice that open_at and open_now cannot be used together.
open_at	int	Optional. An integer represending the Unix time in the same timezone of the search location. If specified, it will return business open at the given time. Notice that open_at and open_now cannot be used together.
attributes	string	Optional. Additional filters to restrict search results. Possible values are:
hot_and_new - Hot and New businesses
request_a_quote - Businesses that have the Request a Quote feature
waitlist_reservation - Businesses that have an online waitlist
cashback - Businesses that offer Cash Back
deals - Businesses that offer Deals
gender_neutral_restrooms - Businesses that provide gender neutral restrooms
You can combine multiple attributes by providing a comma separated like "attribute1,attribute2". If multiple attributes are used, only businesses that satisfy ALL attributes will be returned in search results. For example, the attributes "hot_and_new,cashback" will return businesses that are Hot and New AND offer Cash Back.
*/
