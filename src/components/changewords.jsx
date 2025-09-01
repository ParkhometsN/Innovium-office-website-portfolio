import React, { useEffect, useState } from 'react';
import './styles/hero.css';

const words = ["Сайтов", "Приложений", "Маркетинга", "Рекламы"];

const Typewriter = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000); // 4s = время одной анимации

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="terminal-loader">
            <div className="text">{words[currentWordIndex]}</div>
        </div>
    );
};

export default Typewriter;
