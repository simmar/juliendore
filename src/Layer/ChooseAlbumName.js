import React from 'react';
import validate from '../atome/LoginFormValidationRules';
import useForm from '../atome/useForm';
import Nav from '../components/Nav';
import Pochette from '../components/Pochette';

const ChooseAlbumName = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(login, validate);

  function login() {
    let chooseName = document.getElementById('choose-name');
    chooseName.classList.remove('active');

    let AddPicture = document.getElementById('add-picture');
    AddPicture.classList.add('active');
  }

  return (
    <div className="bloc-content active" id="choose-name">
      <div className="content-panel">
        <Nav />
        <div className="bloc-row-container">
          <Pochette values={values.name} />
          <div className="bloc-action">
            <p className="stape">Etape 1/2</p>
            <p className="title-2">Choisissez un nom</p>
            <form onSubmit={handleSubmit} noValidate>
              <input
                autoComplete="off"
                aria-label="Nom de votre album"
                className="input-choice inText"
                maxLength="14"
                type="name"
                name="name"
                onChange={handleChange}
                required
              />
              {errors.name && <p className="help is-danger">{errors.name}</p>}

              <div className="has-text-centered mt-big">
                <button
                  type="submit"
                  className="button item main"
                  id="validate-choose-name"
                >
                  Valider mon texte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAlbumName;
