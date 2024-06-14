import React from 'react';
import './FAQPage.css';

const FAQPage = () => {
  return (
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
  );
};

export default FAQPage;
