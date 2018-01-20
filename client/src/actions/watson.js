import axios from 'axios';
import * as types from './types';

export function fetchWatsonRequest() {
  return (dispatch) => {
    const apiKey = '8d7aced8efa9ce11cca985d203dce5989cc20148';
    const url = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8d7aced8efa9ce11cca985d203dce5989cc20148&url=https://www.ibm.com/blogs/research/wp-content/uploads/2017/05/user-photo-with-tags-1024x627.jpg&version=2016-05-20&classifier_ids=food';
    console.log('a');
    const request = axios.get(url);
    console.log(request);
    return {
      type: types.FETCH_WATSON,
      payload: request
    };
    // Inform Login API is starting
    // dispatch(fetchWatson());
    // API request
    // return axios.get(`https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=${apiKey}&url=http://img.hankyung.com/photo/201710/01.14980249.1.jpg&version=2016-05-20&classifier_ids=food`)
    //   .then((response) => {
    //     dispatch(fetchWatsonSuccess(response.data));
    //   }).catch((error) => {
    //     console.log(error);
    //     dispatch(fetchWatsonFailure(error));
    //   });
  };
}
