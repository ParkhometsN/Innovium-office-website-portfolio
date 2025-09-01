// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <a href="#backanswer">
//         <button>консультация
//         </button>
//       </a>
      
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   button {
//    --glow-color: #ADEAA2;
//    --glow-spread-color: #ADEAA2;
//    --enhanced-glow-color: #ADEAA2;
//    --btn-color:rgb(52, 71, 49);
//    border: .25em solid var(--glow-color);
//    padding: 1em 3em;
//    color: var(--glow-color);
//    font-size: 15px;
//     font-weight: 400;
//    font-family: 'Geist';
//    background-color: var(--btn-color);
//    border-radius: 2em;
//    outline: none;
//    box-shadow: 0 0 1em .25em var(--glow-color),
//           0 0 4em 1em var(--glow-spread-color),
//           inset 0 0 .75em .25em var(--glow-color);
//    text-shadow: 0 0 .5em var(--glow-color);
//    position: relative;
//    transition: all 0.3s;
//   }
//   button a{
//   color: #ADEAA2;
//   }
//   button::after {
//    pointer-events: none;
//    content: "";
//    position: absolute;
//    top: 120%;
//    left: 0;
//    height: 100%;
//    width: 100%;
//   //  background-color: var(--glow-spread-color);
//    filter: blur(2em);
//    opacity: .7;
//    transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
//   }
//   button:hover a{
//    color: black;
//   }
//   button:hover {
//    color: var(--btn-color);
//    background-color: var(--glow-color);
//    box-shadow: 0 0 1em .25em var(--glow-color),
//           0 0 4em 2em var(--glow-spread-color),
//           inset 0 0 .75em .25em var(--glow-color);
//   }

//   button:active {
//    box-shadow: 0 0 0.6em .25em var(--glow-color),
//           0 0 2.5em 2em var(--glow-spread-color),
//           inset 0 0 .5em .25em var(--glow-color);
//   }`;

// export default Button;


// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//        <a href="#backanswer">
//         <button>Обсудить проект</button>
//        </a>
      
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   button {
//    appearance: none;
//    background-color: transparent;
//    border: 0.125em solid white;
//    border-radius: 0.9375em;
//    box-sizing: border-box;
//    color: #ADEAA2;
//    cursor: pointer;
//    display: inline-block;
//      font-family: 'Geist';
//    font-size: 16px;
//    font-weight: 300;
//    line-height: normal;
//    margin: 0;
//    min-height: 3.75em;
//    min-width: 0;
//    outline: none;
//    padding: 1em 2.3em;
//    text-align: center;
//    text-decoration: none;
//    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
//    user-select: none;
//    -webkit-user-select: none;
//    touch-action: manipulation;
//    will-change: transform;
//   }

//   button:disabled {
//    pointer-events: none;
//   }

//   button:hover {
//    color: #fff;
//    background-color: #1A1A1A;
//    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//    transform: translateY(-2px);
//   }

//   button:active {
//    box-shadow: none;
//    transform: translateY(0);
//   }`;

// export default Button;


import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a href="#backanswer">
          <button className="btn">Обсудить проект</button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    font-size: 16px;
    // text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2.5em;
    display: inline-block;
    cursor: pointer;
    border-radius: 6em;
    transition: all 0.2s;
    border: none;
    font-weight: 300;
    font-family: 'Geist';
    color: white;
    background-color: #1a1a1a;
  }

  .btn:hover {
    transform: translateY(-3px);
    color: #ADEAA2;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }s

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn::after {
    background-color: #1a1a1a;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }`;

export default Button;
