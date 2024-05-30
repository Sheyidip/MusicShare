import React from 'react';
import './HomePage.css';
import homeImage from '../assets/images/Spotify-image (1).png'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => (
  <div className="homeContainer">
    <div className="content">
      <div className="text">
        <h1 className="title">Welcome to MusikShare</h1>
        <p className="description">
          MusikShare is a powerful tool for converting and sharing your music playlists across different platforms. With MusikShare, you can easily:
          <ul>
            <li>Import your playlists from various music streaming services.</li>
            <li>Convert your playlists to different formats and platforms effortlessly.</li>
            <li>Export your playlists to share with friends or transfer to another service.</li>
            <li>Keep your music collection organized and accessible, no matter where you are.</li>
            <li>Discover new music and expand your listening experience.</li>
          </ul>
        </p>
      </div>
      <img src={homeImage} alt="Music" className="homeImage" />
    </div>
    <div className="features">
      <div className="feature">
        <FontAwesomeIcon icon={faSpotify} className="logo" />
        <h2>Convert from Spotify</h2>
        <p>Convert your Spotify playlists to Apple Music or any other streaming platform of your choice.</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faApple} className="logo" />
        <h2>Convert from Apple Music</h2>
        <p>Convert your Apple Music playlists to Spotify or any other streaming platform of your choice.</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faYoutube} className="logo" />
        <h2>Convert from YouTube Music</h2>
        <p>Convert your YouTube Music playlists to Spotify, Apple Music, or any other streaming platform of your choice.</p>
      </div>
    </div>
  </div>
);

export default HomePage;
