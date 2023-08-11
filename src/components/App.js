import React from 'react';
import video from '../data/video';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoPlayer video={video} />
    </div>
  );
}

export default App;
