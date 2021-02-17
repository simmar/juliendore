import React, {useState} from 'react';

const NavLink = ({data, setState}) => {
  const [isActive, setActive] = useState(true);

  return (
    <ul className="has-text-centered" id="stickers">
      {data.map((item, key) => {
        return (
          <li
            // className={'sticker' + (key == 0 ? ' selected' : '')}
            key={key}
            className={`sticker ${isActive === key ? 'selected' : ''}`}
            onClick={() => {
              setActive(key);
              setState(item.url);
            }}
          >
            <span type="button" className="sticker-selector">
              <img src={`${item.url}`} alt={item.description} />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLink;
