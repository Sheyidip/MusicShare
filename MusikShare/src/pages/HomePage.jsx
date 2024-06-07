import React, { useEffect, useState } from 'react';
import './HomePage.css';
import userAImage from '../assets/images/userA.jpg';
import userBImage from '../assets/images/userB.jpg';
import userCImage from '../assets/images/userC.jpg';
import homeImage from '../assets/images/Spotify-image (1).png'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Picker, Emoji } from 'emoji-mart';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    name: "John Doe",
    review: "MusikShare is an amazing tool for managing my playlists across different platforms! 😊",
    rating: 5,
    image: userAImage
  },
  {
    name: "Jane Smith",
    review: "I love how easy it is to convert my Apple Music playlists to Spotify with MusikShare.😍",
    rating: 4,
    image: userBImage
  },
  {
    name: "Chloe Suillivan",
    review: "MusikShare made it so easy to transfer my playlists! A must have for all music lovers😊",
    rating: 5,
    image: userCImage
  },
  // Add more reviews as needed
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="homeContainer">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="heroTitle">Welcome to MusikShare</h1>
        <p className="heroDescription">Convert and share your music playlists across different platforms effortlessly.</p>
        <button className="ctaButton">Get Started</button>
      </div>

      {/* Existing Content */}
      <div className="content">
        <div className="text">
          <h2 className="title">What We Offer</h2>
          <p className="description">
            MusikShare is a powerful tool for converting and sharing your music playlists across different platforms. With MusikShare, you can easily:
          </p>
          <ul>
            <li>Import your playlists from various music streaming services.</li>
            <li>Convert your playlists to different formats and platforms effortlessly.</li>
            <li>Export your playlists to share with friends or transfer to another service.</li>
            <li>Keep your music collection organized and accessible, no matter where you are.</li>
            <li>Discover new music and expand your listening experience.</li>
          </ul>
        </div>
        <img src={homeImage} alt="Music" className="homeImage" />
      </div>

      {/* Features Section */}
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

      {/* Testimonials/Reviews Section */}
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="slideshow">
          {reviews.map((review, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={review.image} alt={review.name} className="reviewImage" />
              <p> {review.review} </p>
              <div className="rating">
                {[...Array(5)].map((star, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className={i < review.rating ? 'star active' : 'star'} />
                ))}
              </div>
              <h3>{review.name}</h3>
            </div>
          ))}
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faqItem">
          <h3>How does MusikShare work?</h3>
          <p>MusikShare connects to your music streaming accounts and allows you to convert and transfer playlists between different services.</p>
        </div>
        <div className="faqItem">
          <h3>Is my data secure?</h3>
          <p>Yes, we use advanced encryption to ensure your data is secure and private.</p>
        </div>
        <div className="faqItem">
          <h3>Does MusikShare support all music streaming platforms?</h3>
          <p>We support a wide range of platforms including Spotify, Apple Music, YouTube Music, and many more.</p>
        </div>
        <div className="faqItem">
          <h3>Can I share my converted playlists with friends?</h3>
          <p>Yes, MusikShare allows you to export and share your playlists easily with friends across different platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
