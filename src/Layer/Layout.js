import React from 'react';
import background from '../assets/images/Stickers-DESKTOP.png';
import AddPicture from './AddPicture';
import ChooseName from './ChooseName';
import Congrats from './Congrats';

const Layout = props => {
  return (
    <div className="main-content active" id="main-content">
      <picture className="background">
        <img className="background responsive" src={background} />
      </picture>
      <ChooseName />
      <AddPicture />
      <Congrats />
    </div>
  );
};

export default Layout;
