import React, {useContext, useState} from 'react';
import data from '../components/imgFile';
import Nav from '../components/Nav';
import NavLink from '../components/NavLink';
import Pochette from '../components/Pochette';
import {CartContext} from '../Context';

const ChooseAlbumPicture = () => {
  const {values} = useContext(CartContext);
  const [state, setState] = useState('/static/media/jd.ad251307.png');

  return (
    <div className="bloc-content" id="add-picture">
      <div className="content-panel">
        <Nav />

        <div className="bloc-row-container">
          <Pochette values={values.name} state={state} />

          <div className="bloc-action">
            <p className="stape">Etape 2/2</p>
            <p className="title-2">Choisissez une photo</p>

            <NavLink data={data} setState={setState} />

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
                <span
                  className="sticker-selector"
                  data-full="images/stickers/full/jd.png"
                >
                  <img alt="" src="images/stickers/jd.png" />
                </span>
                <span className="close" id="clear-user-image-btn">
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
                  <img src="svg/user-image-close.svg" alt="Modifier" />
                </span>
              </div>

              <span className="button item secondary" id="btn-pick-image">
                charger une photo
              </span>
            </div>
            <div className="has-text-centered mt-small">
              <span className="button item main" id="add-picture-validate">
                Valider ma photo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAlbumPicture;
