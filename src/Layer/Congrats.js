import React from 'react';
import Nav from '../components/Nav';

const Congrats = () => {
  return (
    <div className="bloc-content" id="congrats">
      <div className="content-panel">
        <Nav />

        <div className="bloc-row-container">
          <div className="pochette">
            <div className="canvas-container">
              <canvas id="final" className="picture" />
            </div>
            <p className="name output-pochette">aimée</p>
          </div>

          <div className="bloc-action">
            {/* <div className="container-arrow scroll-to">
                <span>
                  <svg className="icon main arrow-down">
                    <use xlink:href="./svg/icons.svg#arrow-down"></use>
                  </svg>
                </span>
            </div> */}
            <p className="title-2">Félicitations, votre cover a été créée</p>

            <div className="has-text-centered">
              <a href="#" className="button item main" id="download">
                télécharger ma photo pour la partager
              </a>
            </div>
            <div className="has-text-centered">
              <a
                href="#"
                className="button item secondary js-btn-go-home"
                id="restart-button"
              >
                recommencer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
