import React from 'react';
import jd from '../assets/images/stickers/jd.png';

const Pochette = ({values}) => {
  const initialValue = [
    {
      id: 1,
      url: jd,
      description: 'jd',
    },
  ];
  const foodBar = initialValue.find((item) => item.description === 'jd');
  const resultValue = foodBar['url'];
  return (
    <div className="pochette">
      <div className="canvas-container">
        <img className="picture" src={resultValue} />
      </div>
      <p className="name output-pochette">{values}</p>
    </div>
  );
};

export default Pochette;
