import searchYouTube from '../../src/lib/searchYouTube.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';

var getURLSearchParams = function(url) {
  return url
    .split('?')[1]
    .split('&')
    .reduce((map, params) => {
      var [key, value] = params.split('=');
      map[key] = value;
      return map;
    }, {});
};

var hasSameShape = function(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }

  for (var key in objectOne) {
    if (!key in objectTwo) {
      return false;
    }

    if (typeof objectOne[key] !== typeof objectTwo[key]) {
      return false;
    }

    if (Object.prototype.toString.call(objectOne[key]) === '[object Object]') {
      return hasSameShape(objectOne[key], objectTwo[key]);
    }
  }

  return true;
};

describe('searchYouTube', function() {
  var requests, xhr;

  // Sinon temporarily hijacks all outgoing AJAX requests with `useFakeXMLHttpRequest`
  // letting us synchronously inspect any request made by `searchYouTube`

  beforeEach(function() {
    requests = [];
    xhr = sinon.useFakeXMLHttpRequest();
    xhr.onCreate = function(req) { requests.push(req); };
  });

  afterEach(function() {
    if (xhr.restore) {
      xhr.restore();
    }
  });

  it('should send a GET request', function() {
    searchYouTube({}, () => {});

    expect(requests[0].method).to.equal('GET');
  });

  it('should accept `query` send it in GET request', function() {
    searchYouTube('cats', () => {});

    var params = getURLSearchParams(requests[0].url);
    expect(params.q).to.equal('cats');
  });

  // Same shape means that the data should have the same keys, nested the same way as `exampleVideoData`,
  // though it will not necessarily have the same values.
  it('should GET videos with the same shape as `exampleVideoData`', function(done) {
    // We want this test to make a real AJAX request
    xhr.restore();

    searchYouTube('react', (data) => {
      expect(hasSameShape(data, exampleVideoData)).to.be.true;
      done();
    });
  });
});
