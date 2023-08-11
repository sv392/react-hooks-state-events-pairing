import React from 'react';
import VideoDetails from './VideoDetails';
import CommentSection from './CommentSection';

const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <VideoDetails video={video} />
      <CommentSection comments={video.comments} /> {/* Pass the comments prop */}
    </div>
  );
};

export default VideoPlayer;
