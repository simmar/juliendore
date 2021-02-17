import React, {useContext} from 'react';
import img from '../assets/images/stickers/jd.png';
import {CartContext} from '../Context';

const Intro = (props) => {
  const {status, setStatus} = useContext(CartContext);

  const handleToggle = () => {
    setStatus(true);
    if (!setStatus === false) {
      document.body.classList.add('active');
      let elem = document.getElementById('main-content');
      elem.classList.remove('active');
    }
  };

  return (
    <div id="home">
      <div className="home-bloc-centrale">
        <h1 className="title-album">aimée</h1>
      </div>

      <div className="pochette">
        <div className="inner">
          <div className="picture canvas-pochette">
            <img alt="Julien Doré" className="responsive" src={img} />
          </div>
          <p className="name">aimée</p>
        </div>
      </div>
      <div className="footer">
        <div className="has-text-centered">
          <a
            href="!#"
            onClick={handleToggle}
            className="button item main"
            id="create-button"
          >
            créer ma pochette personnalisée
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
