import React, {useContext, useEffect, useState} from 'react';
import Nav from '../components/Nav';
import Pochette from '../components/Pochette';
import {CartContext} from '../Context';
import users from './imgFile';

const ChooseAlbumPicture = () => {
  const {values} = useContext(CartContext);
  const [data, setData] = useState(users);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    setData(data);
  }, []);

  function handleClick(name) {
    const data = users.find((item) => item.url === name.url);
    const dataUrl = data.url;

    if (name.url === dataUrl) {
      setActive(!isActive);
      console.log('isActive', isActive);
    } else {
      setActive(isActive);
      console.log('isActive', isActive);
    }

    console.log('name.url', name.url);
    console.log('data', data);
    console.log('dataUrl', dataUrl);
  }

  return (
    <div className="bloc-content" id="add-picture">
      <div className="content-panel">
        <Nav />

        <div className="bloc-row-container">
          <Pochette values={values.name} />

          <div className="bloc-action">
            <p className="stape">Etape 2/2</p>
            <p className="title-2">Choisissez une photo</p>

            <ul className="has-text-centered" id="stickers">
              {data.map((name, key) => {
                return (
                  <li
                    // className={'sticker' + (key == 0 ? ' selected' : '')}
                    className={`sticker ${isActive === key ? 'selected' : ''}`}
                    onClick={() => {
                      setActive(key);
                      handleClick(name);
                    }}
                    key={key}
                  >
                    <a type="button" className="sticker-selector">
                      <img src={`${name.url}`} alt={name.description} />
                    </a>
                  </li>
                );
              })}
            </ul>

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

export default ChooseAlbumPicture;
