import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
      currentVideo: {},
    };
  }

  titleOnClick(event) {
    if (event.target.className !== 'video-list-entry-title') {
      return;
    }
    var currentId = event.target.id;
    for (var video of this.state.videoData) {
      if (video.id.videoId === currentId) {
        this.setState({
          currentVideo: video
        });
        break;
      }
    }
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //() => th     is.updateVideos('react'),
  //     1000
  //   );
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }
  updateVideos(query) {
    searchYouTube(query, (data) => {
      this.setState({
        videoData: data,
        currentVideo: data[0]
      });
    });
  }

  componentDidMount() {
    this.updateVideos('react');
  }

  searchOnChange(event) {
    if (event.target.className !== 'form-control') {
      return;
    }
    console.log(event.target.value);
    var value = event.target.value;
    var debounce = function(func, interval) {
      var timeOut;
      return (...arg) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => { func.apply(this, arg); }, interval);
      };
    };

    var search = debounce(() => { this.updateVideos(value); }, 500);
    search();

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div onChange={this.searchOnChange.bind(this)} className="col-md-6 offset-md-3">
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
