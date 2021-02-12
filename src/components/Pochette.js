import React from 'react';
import jd from '../assets/images/stickers/jd.png';

const Pochette = ({values}) => {
  return (
    <div className="pochette">
      <div className="canvas-container">
        <img className="picture" src={jd} />
      </div>
      <p className="name output-pochette">{values}</p>
    </div>
  );
};

export default Pochette;
