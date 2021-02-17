import React from 'react';

const Pochette = ({values, state}) => {
  console.log('state', state);

  return (
    <div className="pochette">
      <div className="canvas-container">
        <img className="picture" src={state} alt="result choosen" />
      </div>
      <p className="name output-pochette">{values}</p>
    </div>
  );
};

export default Pochette;
