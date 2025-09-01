import React from 'react';
import './styles/hero.css';
import ActiveButton from "../components/main_button.jsx";

const Hero = () => {
    return (
        <div className="containet">
            <img src="/img/arrow.svg" alt="arrow" />
            <img className='arrowledft' src="/img/arrow.svg" alt="arrow" />
            <img className='downarrow' src="/img/arrow.svg" alt="arrow" />
            <img className='downleftarrow' src="/img/arrow.svg" alt="arrow" />
            <div className="content">
                <div className="hero">
                    <img src="/img/figmaarrow.svg" alt="figma" />
                    <h1>Digital-решения для роста вашего <span className='green'>Бизнеса</span></h1>
                    <div className="morecontent">
                        <div className="onlineanimation">
                            <div className="pulse-container">
                                <div className="pulse-wave"></div>
                                <div className="pulse-center"></div>
                            </div>
                            <h4 className='idididi'>Мы онлайн</h4>
                        </div>
                        <ActiveButton />
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default Hero;
