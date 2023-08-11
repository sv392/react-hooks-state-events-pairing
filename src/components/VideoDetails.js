import React from 'react';

const VideoDetails = ({ video }) => {
  return (
    <div className="video-details">
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetails;
