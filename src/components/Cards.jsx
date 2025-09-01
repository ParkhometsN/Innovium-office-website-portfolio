import React from 'react';
import './styles/cards.css';


const Card = ({ title, imageUrl, link }) => {
  return (
    <div className="card_keyses">
      <a href={link}>
        <img src={imageUrl} alt={title} className="card-image" />
        <h3 className="card-title"><span  className="sercle jjjj"></span>{title}</h3>
      </a>
    </div>
  );
};

export default Card;