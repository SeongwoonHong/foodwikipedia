const express = require('express');
const axios = require('axios');
const app = express();

var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'consumer-key',
  consumer_secret: 'consumer-secret',
  token: 'token',
  token_secret: 'token-secret',
});

const yelpApi = 'https://api.yelp.com/v3/businesses/search';
const yelpClientId = 'K2qFtqlPaCCStt8UsO02-Q';
const yelpApiKey = 'BqPj5udquNHHVWamBDJFuzguSZPmMxACorv7NqYWz4WVpsxsw1QFu-b06Txb6xGjG2hemRE5beTVcN-GdPVwu6vZ6zGENAybB46_5lUFANw4Dy0wbj7oV4qghtxiWnYx';
const yelpClientSecret = 'n8z79QdxVPNBd9fz2gd5JOCWEAb3QUPDtj5IbIYSEpUWE7nTh2nTYBtMrLGbE4TJ';
const tokenEndpoint = 'https://api.yelp.com/oauth2/token';

app.use(express.json());

app.post('/yelp', async (req, res) => {
  console.log('server post is working');
  const term = req.body.term;
  const location = req.body.location;
  try {
    const data = await axios.get(`${yelpApi}/?term=${term}&location=${location}`,{ headers: { 'Authorization': `Bearer ${yelpApiKey}` }});
    // const data = await axios.get('http://localhost:3000/');
    console.log(data);
    // console.log('1111')
    return res.send(data);
  }catch(e) {
    return res.status(404).send(e);
  }
})
app.listen(4000, () => {
  console.log('Express is running on port 4000');
});
