import React from 'react';
import styled from 'styled-components';

const CardSecondPrice = ({pricecardssec,type,ddd,srferst,sersecond,serthree,serfour}) => {
  return (
    <StyledWrapper>
      <div className="card mobilecards">
        <div className="aboutservwes">
          <h2 className="tyoeprice">
              {type}
          </h2>
          <h3 className="tyoeddd">
              {ddd}
          </h3>
        </div>
        
        {/* <img src={imgprice} alt="jj" /> */}
        <p className="price">
          {pricecardssec}
        </p>
        <ul className="lists">
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ADEAA2" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span>{srferst}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ADEAA2" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span>{sersecond}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ADEAA2" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span>{serthree}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ADEAA2" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span>{serfour}</span>
          </li>
        </ul>
        <a href="https://t.me/miroshnikk" className="action">
            рассчитать проект
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card{
  width: 70vw;
  object-fit: cover;
  }
  .card {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;
    background-color: rgb(25, 24, 24);;
    padding: 1.5rem;
  }

  .price {
    font-size: 3rem;
    line-height: 1;
    font-weight: 300;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 1);
  }

  .lists {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    grid-row-gap: 0.75rem;
    row-gap: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(255, 255, 255, 1);
    padding-inline-start: 0px;
    
  }

  .list {
    display: flex;
    align-items: center;
  }

  .list svg {
    height: 2rem;
    width:2rem;
    background-color: black;
    padding: 10px;
    border-radius: 50%;
  }

  .list span {
    margin-left: 1rem;
    height: 20px;
  }

  .action {
    margin-top: 2rem;
    width: 100%;
    border-radius: 9999px;
    background-color: black;
    padding: 0.625rem 1.5rem;
    text-align: center;
    font-size: 1vw;
    font-weight: 300;
    line-height: 1.25rem;
    color: white;
    outline: none;
    transition: all .2s ease;
  }

  .action:hover {
    color: #ADEAA2;
  }
  .action:active{
    opacity: 0.5;

}`;

export default CardSecondPrice;
