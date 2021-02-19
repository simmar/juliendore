import React, {useContext} from 'react';
import Demo from '../components/ImageUpload';
import data from '../components/imgFile';
import Nav from '../components/Nav';
import NavLink from '../components/NavLink';
import Pochette from '../components/Pochette';
import {CartContext} from '../Context';

const ChooseAlbumPicture = ({state, setState}) => {
  const {values} = useContext(CartContext);

  return (
    <div className="bloc-content" id="add-picture">
      <div className="content-panel">
        <Nav />

        <div className="bloc-row-container">
          <Pochette values={values.name} state={state} />

          <div className="bloc-action">
            <p className="stape">Etape 2/2</p>
            <p className="title-2">Choisissez une photo</p>

            <NavLink data={data} setState={setState} />

            <div className="separator">
              <p>ou</p>
            </div>
            <Demo />
            <div className="has-text-centered mt-small">
              <span className="button item main" id="add-picture-validate">
                Valider ma photo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAlbumPicture;
