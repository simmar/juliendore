import React from 'react';
import spotifyBlack from '../assets/images/spotify-black.png';
import spotifyWhite from '../assets/images/spotify-white.png';

const Header = () => {
  return (
    <header>
      <div className="logo item">
        <a href="https://open.spotify.com/album/61gok9zbkQ8bfOHmRPJh6P">
          <img
            alt="Écouter sur Spotify"
            className="responsive icon main white"
            src={spotifyWhite}
          />
        </a>

        <a href="https://open.spotify.com/album/61gok9zbkQ8bfOHmRPJh6P">
          <img
            alt="Écouter sur Spotify"
            className="responsive icon main"
            src={spotifyBlack}
          />
        </a>
      </div>

      <a
        className="button item main"
        href="https://open.spotify.com/album/61gok9zbkQ8bfOHmRPJh6P"
      >
        écouter l'album
      </a>
    </header>
  );
};

export default Header;
