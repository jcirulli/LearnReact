import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details'
const API_KEY = 'AIzaSyBZvxQZ1RMgMYdUJprV-nqclpzwB6aq4dQ';

// Create a new component.
// component to produce html

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos : [], selectedVideo : null };

    YTSearch({key: API_KEY, term: 'surfing'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo : videos[0]
      }); // ==> { videos: videos } == { videos } ( if same name only )
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    )
  }
}

// Take component html
// put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
