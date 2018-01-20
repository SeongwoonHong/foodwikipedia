//Yelp part (server side)
const express = require('express');
const axios = require('axios');
var watson = require('watson-developer-cloud');
const app = express();
const yelpApi = 'https://api.yelp.com/v3/businesses/search';
const yelpApiKey = 'BqPj5udquNHHVWamBDJFuzguSZPmMxACorv7NqYWz4WVpsxsw1QFu-b06Txb6xGjG2hemRE5beTVcN-GdPVwu6vZ6zGENAybB46_5lUFANw4Dy0wbj7oV4qghtxiWnYx';

const upload = require('multer')({
  limits: {
    fieldSize: 50 * 1024 * 1024
  }
});

app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/yelp', async (req, res) => {
  const term = req.body.term;
  const location = req.body.location;
  try {
    const data = await axios.get(`${yelpApi}?term=${term}&location=${location}`, {
      headers: {
        'Authorization': `Bearer ${yelpApiKey}`
      }
    });
    return res.json(data.data);
  } catch (e) {
    return res.status(404).send(e);
  }
});

app.use('/api', require('./routes'));
app.post('/watson/url', async (req, res) => {

  const data = await axios.get(`https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?url=${req.body.url}&version=2016-05-20&classifier_ids=food`);

  return (data.data.images[0].classifiers[0].classes);

});

app.post('/watson/file', upload.any(), async (req, res) => {
  console.log(req);
  const buff = Buffer.from(req.body.file, 'base64');
  console.log(buff);
  // var visual_recognition_params = {
  //   images_file: req.body.file,
  // };
  var visual_recognition = watson.visual_recognition({
  api_key: '8d7aced8efa9ce11cca985d203dce5989cc20148',
  version: 'v3',
  version_date: '2016-05-20'
});

let parameters = {
  classifier_ids: ["food"]
};

var params = {
  images_file: req.body.file,
  parameters: parameters
};
visual_recognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});
  // try {
  //   const data = await axios.post('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8d7aced8efa9ce11cca985d203dce5989cc20148&version=2016-05-20', visual_recognition_params);
  //   console.log('result');
  //   console.log(data);
  // }
  // catch(err) {
  //   console.log(err.response.data.images);
  // }
  // return (data.data.images[0].classifiers[0].classes);

});

app.listen(4000, () => {
  console.log('Express is running on port 4000');
});
