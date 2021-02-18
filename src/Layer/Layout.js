import React, {useState} from 'react';
import background from '../assets/images/Stickers-DESKTOP.png';
import ChooseAlbumName from './ChooseAlbumName';
import ChooseAlbumPicture from './ChooseAlbumPicture';
import Congrats from './Congrats';

const Layout = (props) => {
  const [state, setState] = useState('/static/media/jd.ad251307.png');

  return (
    <div className="main-content active" id="main-content">
      <picture className="background">
        <img
          className="background responsive"
          src={background}
          alt="background"
        />
      </picture>
      <ChooseAlbumName state={state} />
      <ChooseAlbumPicture state={state} setState={setState} />
      <Congrats />
    </div>
  );
};

export default Layout;
