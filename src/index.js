import React from 'react';
import './style.css';

const ReactVideoBg = ({vidSrc, muted, autoPlay, loop, opacity, backgroundColor, children}) => {
  return(
    <section id='main'>
      <div className="video-container">
        <video className="video" autoPlay={autoPlay} muted={muted} loop={loop}>
          <source type="video/mp4" src={vidSrc} />
        </video>
        <div className="video-overlay" style={{
          opacity,
          backgroundColor
        }}></div>
        <div className="video-text">
          {children}
        </div>
      </div>
    </section>
  )
}

export default ReactVideoBg;