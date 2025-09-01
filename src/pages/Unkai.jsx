import React, { useState, useEffect, useRef } from "react";
import '../components/home.css';
import '../components/styles/loaderimg.css';
import { Layout } from 'antd';
import AppHeader from "../components/Header.jsx";
import BackAnswer from "../components/consultation.jsx";
import LoaderImg from "../components/loader_img.jsx";

const { Content } = Layout;

function Unkai() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = './img/keys/unkaikeys.png';

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    // Если изображение уже загружено (кеш)
    if (img.complete) {
      handleLoad();
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <Layout>
      <AppHeader />

      <div className="loderimg">
        {isLoading && <LoaderImg id='loaderblock' />}
        {hasError && <div>error</div>}
      </div>
      
      <div className="keysss">
        <img
          ref={imgRef}
          id="potokeys"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          style={{ 
            display: isLoading ? 'none' : 'block',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
          className="keysii"
          src="./img/keys/unkaikeys.png"
          alt="keys"
        />
      </div>
      
      <div id="backanswer" className="backclients">
        <BackAnswer />
      </div>
    </Layout>
  );
}

export default Unkai;