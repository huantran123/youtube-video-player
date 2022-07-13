import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // create: function(message, successCB, errorCB = null) {
  //   $.ajax({
  //     url: searchYouTube.server,
  //     type: 'POST',
  //     data: JSON.stringify(message),
  //     contentType: 'application/json',
  //     success: successCB,
  //     error: errorCB || function(error) {
  //       console.error('chatterbox: Failed to post message', error);
  //     }
  //   });
  // },
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/',
    type: 'GET',
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      // data.forEach(item => {
      //   if(item.title.subString(query)){
      //     showit!
      //   };
      // });
    },
    error: function(error) {
      console.error('FAIL: ', error);
    }
  });
  // var getData = function(sucessCB, errorCB) {
  //   $.ajax({
  //     url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/',
  //     type: 'GET',
  //     data: { order: '-createdAt' },
  //     contentType: 'application/json',
  //     success: function(data){
  //       console.log(data);
  //     },
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
