import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
