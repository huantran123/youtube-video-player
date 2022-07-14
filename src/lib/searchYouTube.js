import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/',
    type: 'GET',
    data: { q: query },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('FAIL: ', error);
    }
  });

  // var getData = function(sucessCB, errorCB) {
  //   $.ajax({
  //     url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/',
  //     type: 'GET',
  //     data: { q: query },
  //     contentType: 'application/json',
  //     // success: function(data) {
  //     //   console.log(data);
  //     // },
  //     success: sucessCB,
  //     error: errorCB || function(error) {
  //       console.error('FAIL: ', error);
  //     }
  //   });
  // };

  // getData((data) => {
  //   console.log(data);
  // });




};

export default searchYouTube;
