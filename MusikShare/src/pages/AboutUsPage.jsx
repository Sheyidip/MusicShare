import React from 'react';
import './AboutUsPage.css';
//import teamImage from '../assets/images/team.jpg';

const AboutUsPage = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-description">Learn more about our mission, vision, and the amazing team behind MusikShare.</p>
      </div>

      <div className="content-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          At MusikShare, our mission is to make it easier for music lovers to share and enjoy their playlists across different streaming platforms.
          We believe that music should be accessible and enjoyable for everyone, no matter what service they use.
        </p>
      </div>

      <div className="content-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          We envision a world where music lovers can seamlessly transition between different streaming services without losing their favorite playlists.
          Our goal is to be the leading platform for music playlist management and sharing.
        </p>
      </div>

      <div className="content-section team-section">
        <h2 className="section-title">Meet the Team</h2>
        {/*<img src={teamImage} alt="Our Team" className="team-image" /> */}
        <p className="section-description">
          Our team is made up of passionate music enthusiasts and tech experts dedicated to bringing you the best experience in music playlist management.
        </p>
      </div>

      <div className="content-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:support@musikshare.com">support@musikshare.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
