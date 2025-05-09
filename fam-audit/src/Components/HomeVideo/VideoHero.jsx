import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoHero.scss';
import auditvideo from '../HomeVideo/audit-intro.mp4'
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const VideoHero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/elaqe'); 
  };

  return (
    <div className="video-hero-container">
      <video
        className="background-video"
        src={auditvideo} 
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="dark-overlay"></div>
      <div className="overlay">
        <h1>FAM GROUP AUDIT</h1>
        <button className="contact-button" onClick={handleClick}>
          ƏLAQƏ  <MdOutlineConnectWithoutContact />
        </button>
      </div>
    </div>
  );
};

export default VideoHero;