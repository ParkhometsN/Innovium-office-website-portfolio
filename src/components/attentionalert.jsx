import React, { useRef } from 'react';
import './styles/hero.css';

const AttentionAlert = () => {
  const alertRef = useRef(null);

  const handleClose = () => {
    if (alertRef.current) {
      alertRef.current.style.display = 'none';
    }
  };

  return (
    <div className='attention' ref={alertRef}>
        <div className="contentddd">
            <div className="attentionn" >
                Этот сайт находится в стадии разработки.(◕‿◕)
            </div>
            <button id="close_attention" onClick={handleClose}>
        ок
            </button>
        </div>
    </div>
  );
};

export default AttentionAlert;
