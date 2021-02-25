import React, {useContext} from 'react';
import {CartContext} from '../Context';

const NewImageUpload = ({state}) => {
  console.log('state', state);
  const {isActive, setisActive} = useContext(CartContext);

  return (
    <div className={`sticker user ${isActive ? '' : 'hidden'}`}>
      <span
        className="sticker-selector"
        data-full="images/stickers/full/jd.png"
      >
        <img alt="" src={state} />
      </span>
      <span
        className="close"
        id="clear-user-image-btn"
        onClick={() => setisActive(false)}
      >
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
      </span>
    </div>
  );
};

export default NewImageUpload;
