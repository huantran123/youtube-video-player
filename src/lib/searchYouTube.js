import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // if (query === undefined) {
  //   var dataVal = {order: '-createAt'};
  // } else {
  //   var dataVal = {q: query};
  // }
  // console.log(dataVal);
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/',
    type: 'GET',
    data: {q: query},
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('FAIL: ', error);
    }
  });

};

export default searchYouTube;
