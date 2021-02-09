import React from 'react';

const Pochette = (props) => {
  return (
    <div className="pochette">
      <div className="canvas-container">
        <canvas className="picture" />
      </div>
      <p className="name output-pochette">{props.values}</p>
    </div>
  );
};

export default Pochette;
