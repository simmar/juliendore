import React from 'react';
import background from '../assets/images/Stickers-DESKTOP.png';
import ChooseAlbumName from './ChooseAlbumName';
import ChooseAlbumPicture from './ChooseAlbumPicture';
import Congrats from './Congrats';

const Layout = (props) => {
  return (
    <div className="main-content active" id="main-content">
      <picture className="background">
        <img className="background responsive" src={background} />
      </picture>
      <ChooseAlbumName />
      <ChooseAlbumPicture />
      <Congrats />
    </div>
  );
};

export default Layout;
