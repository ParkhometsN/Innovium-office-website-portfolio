import React from "react";
import './styles/how_we_work.css'

function CArsdinn({text, gif, step,dopdescr}) {
    return (
        <div className="wrpapper">
            <div className="background_ofjioeid">
                <div className="containet_content">
                    <div className="kefkef">
                        <div className="spstepdkenn">
                            <h5>{step}</h5>
                        </div>
                        <div className="deddd">
                            <h5 className="desc">{text}</h5>
                            <h5 className="ijewofjwefo">{dopdescr}</h5>
                        </div>
                    </div>
                    <div className="wefjief">
                        <img src={gif} alt="gifwrk" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CArsdinn;



// import React from "react";
// import './styles/how_we_work.css'

// function CArsdinn() {
//     return (
//         <div className="wrpapper">
//             <div className="background_ofjioeid">
//                 <div className="containet_content">
//                     <div className="kefkef">
//                         <h5>'Шаг 1</h5>
//                         <h5>"Проведём 3-5 интервью, где изучим продукт, рынок, ЦА и воронку</h5>
//                     </div>
//                     <div className="wefjief">
//                         <div className="video-container">
//                             <video autoPlay loop muted playsInline>
//                                 <source src='./src/img/chips.mp4' type="video/mp4" />
//                                 Ваш браузер не поддерживает видео.
//                             </video>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CArsdinn;