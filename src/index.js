// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import exampleVideoData from './data/exampleVideoData.js';
searchYouTube('react', (data) => {
  var videos = Array.from(data);
  ReactDOM.render(<App searchYouTube={videos}/>, document.getElementById('app'));
});
//ReactDOM.render(<App />, document.getElementById('app'));



