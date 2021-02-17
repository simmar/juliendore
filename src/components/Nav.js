import React, {useContext} from 'react';
import backBlack from '../assets/svg/back-black.svg';
import closeBlack from '../assets/svg/close-black.svg';
import {CartContext} from '../Context';

const Nav = () => {
  const {setStatus} = useContext(CartContext);

  const handleToggle = () => {
    setStatus(true);
    if (!setStatus === false) {
      document.body.classList.remove('active');
      let elem = document.getElementById('main-content');
      elem.classList.add('active');
    }
  };

  return (
    <div className="navigation-header">
      <span className="link back" id="close-add-picture">
        <img alt="retour" src={backBlack} />
        <span>Retour</span>
      </span>
      <span
        className="link closed js-btn-go-home"
        id="closeall-add-picture"
        onClick={handleToggle}
      >
        <span>Fermer</span>
        <img alt="fermer" src={closeBlack} />
      </span>
    </div>
  );
};

export default Nav;
