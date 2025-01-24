import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to bugalu</h1>
        <p>Your journey to mastering dance begins here.</p>
      </header>
      <section className="home-intro">
        <h2>About Us</h2>
        <p>
          At Bugalu Dance Studio, we are passionate about teaching and celebrating the art of dance. Whether you're a beginner or an experienced dancer, we have classes and workshops to suit your needs.
        </p>
      </section>
      <section className="home-features">
        <h2>Upcoming Workshops</h2>
        <p>Check out our latest workshops and book your spot today!</p>
      </section>
      <section className="home-gallery">
        <h2>Gallery</h2>
        <p>Explore photos and videos from our past events and performances.</p>
      </section>
      <section className="home-blog">
        <h2>Blog</h2>
        <p>Stay updated with our latest news, dance tips, and inspiring stories.</p>
      </section>
      <footer className="home-footer">
        <p>Follow us on social media:</p>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </footer>
    </div>
  );
};

export default Home;
