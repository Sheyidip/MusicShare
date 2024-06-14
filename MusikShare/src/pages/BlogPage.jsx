
import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    title: "Why MusikShare is the Best Tool for Music Lovers",
    date: "June 10, 2024",
    content: "MusikShare offers a seamless way to manage and share your music playlists across various platforms. In this article, we explore the features that make MusikShare a must-have for any music enthusiast."
  },
  {
    title: "How to Transfer Your Playlists Between Streaming Services",
    date: "May 22, 2024",
    content: "Transferring playlists can be a hassle, but with MusikShare, it's a breeze. Follow our step-by-step guide to learn how you can easily move your playlists from one service to another."
  },
  {
    title: "The Future of Music Streaming",
    date: "April 15, 2024",
    content: "Music streaming is constantly evolving. Discover the trends and innovations that are shaping the future of how we listen to music."
  }
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
