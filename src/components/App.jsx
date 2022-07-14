import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
  }

  titleOnClick(event) {
    if (event.target.className !== 'video-list-entry-title') {
      return;
    }
    var currentId = event.target.id;
    for (var video of exampleVideoData) {
      if (video.id.videoId === currentId) {
        this.setState({
          currentVideo: video
        });
        break;
      }
    }
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div onClick={this.titleOnClick.bind(this)} className="col-md-5">
            <VideoList videos={this.state.videoData}/>
          </div>
        </div>
      </div>
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
