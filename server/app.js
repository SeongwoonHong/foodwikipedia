const express = require('express');
const axios = require('axios');
const app = express();

const yelpApi = 'https://api.yelp.com/v3/businesses/search';
const yelpApiKey = 'BqPj5udquNHHVWamBDJFuzguSZPmMxACorv7NqYWz4WVpsxsw1QFu-b06Txb6xGjG2hemRE5beTVcN-GdPVwu6vZ6zGENAybB46_5lUFANw4Dy0wbj7oV4qghtxiWnYx';

app.use(express.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/yelp', async (req, res) => {
  const term = req.body.term;
  const location = req.body.location;
  try {
    const data = await axios.get(`${yelpApi}?term=${term}&location=${location}`,{ headers: { 'Authorization': `Bearer ${yelpApiKey}` }});
    return res.json(data.data);
  }catch(e) {
    return res.status(404).send(e);
  }
})
app.listen(4000, () => {
  console.log('Express is running on port 4000');
});
