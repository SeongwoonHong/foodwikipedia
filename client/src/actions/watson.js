import axios from 'axios';
import * as types from './types';

export function fetchWatsonUrlRequest() {
  return (dispatch) => {
    const params = {
      url: 'http://img.hankyung.com/photo/201710/01.14980249.1.jpg'
    }
    return axios.post('/watson/url', params)
      .then((response) => {
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function fetchWatsonFileRequest(value) {
  return (dispatch) => {
    // const params = {
    //   url: 'http://img.hankyung.com/photo/201710/01.14980249.1.jpg'
    // }
    return axios.post('/watson/file', value)
      .then((response) => {
      }).catch((error) => {
        console.log(error);
      });
  };
}
