import React from 'react'

const VideoBackground = () => {
  return (
    <section className="absolute -z-10 top-0 left-0 w-full h-full">
      <video
        className="w-full h-full"
        playsInline
        loop
        autoPlay
        preload="auto"
        muted
        style={{
          objectFit: 'cover',
          overflowClipMargin: 'content-box',
          overflow: 'clip',
        }}
      >
        <source src={`/video/Arknights _Trailer_1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoBackground;