import React from 'react';
import Nav from '../components/Nav';

const AddPicture = () => {
  return (
    <div className="bloc-content" id="add-picture">
      <div className="content-panel">
        <Nav />

        <div className="bloc-row-container">
          <div className="pochette">
            <div className="canvas-container">
              <canvas className="picture" id="canvas" />
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
            <p className="stape">Etape 2/2</p>
            <p className="title-2">Choisissez une photo</p>
            <div className="has-text-centered" id="stickers">
              <div className="sticker selected">
                <a
                  href="#"
                  className="sticker-selector"
                  data-full="images/stickers/full/jd.png"
                >
                  <img alt="" src="images/stickers/jd.png" />
                </a>
              </div>
              <div className="sticker">
                <a
                  href="#"
                  className="sticker-selector"
                  data-full="images/stickers/full/1.png"
                >
                  <img alt="" src="images/stickers/1.png" />
                </a>
              </div>
              <div className="sticker">
                <a
                  href="#"
                  className="sticker-selector"
                  data-full="images/stickers/full/2.png"
                >
                  <img alt="" src="images/stickers/2.png" />
                </a>
              </div>
              <div className="sticker">
                <a
                  href="#"
                  className="sticker-selector"
                  data-full="images/stickers/full/3.png"
                >
                  <img alt="" src="images/stickers/3.png" />
                </a>
              </div>
              <div className="sticker">
                <a
                  href="#"
                  className="sticker-selector"
                  data-full="images/stickers/full/4.png"
                >
                  <img alt="" src="images/stickers/4.png" />
                </a>
              </div>
            </div>
            <div className="separator">
              <p>ou</p>
            </div>
            <div className="has-text-centered">
              <input
                accept="image/*"
                id="imageLoader"
                name="imageLoader"
                type="file"
              />

              <div className="sticker user hidden">
                <a
                  href="#"
                  className="sticker-selector"
                  data-full="images/stickers/full/jd.png"
                >
                  <img alt="" src="images/stickers/jd.png" />
                </a>
                <a href="#" className="close" id="clear-user-image-btn">
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#fff">
                      <path d="m1.70711.292893c-.39053-.3905241-1.023693-.3905241-1.414217 0-.3905241.390524-.3905241 1.023687 0 1.414217zm12.58579 15.414207c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142zm-14.000007-13.99999 14.000007 13.99999 1.4142-1.4142-13.99999-14.000007z" />
                      <path d="m.292893 14.2929c-.3905241.3905-.3905241 1.0237 0 1.4142.390524.3905 1.023687.3905 1.414217 0zm15.414207-12.58579c.3905-.39053.3905-1.023693 0-1.414217-.3905-.3905245-1.0237-.3905245-1.4142 0zm-13.99999 13.99999 13.99999-13.99999-1.4142-1.414217-14.000007 14.000007z" />
                    </g>
                  </svg>
                  <img
                    src="svg/user-image-close.svg"
                    alt="Modifier votre image"
                  />
                </a>
              </div>

              <a href="#" className="button item secondary" id="btn-pick-image">
                charger une photo
              </a>
            </div>
            <div className="has-text-centered mt-small">
              <a
                href="#"
                className="button item main"
                id="add-picture-validate"
              >
                Valider ma photo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPicture;
