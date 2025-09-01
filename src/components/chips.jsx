import React from 'react';
import './styles/Header.css';


function Chips() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="./src/img/chips.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}

export default Chips;