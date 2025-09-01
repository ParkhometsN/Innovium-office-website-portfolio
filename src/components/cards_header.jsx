import React from 'react';
import './styles/mainheader.css';

const Cardmainheader = ({title,descrptio}) => {
    return (
        <div className="backgroundofcard">
            <h1 className="title">{title}</h1>
            <h2 className="description">{descrptio}</h2>
        </div>
    );
  }
export default Cardmainheader;