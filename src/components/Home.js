import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home container">
      <header className="home-header jumbotron text-center">
        <h1 className="display-4">Welcome to Bugaluuuuu</h1>
        <p className="lead">Your journey to mastering dance begins here.</p>
      </header>
      <section className="home-intro my-5">
        <h2>About Uss</h2>
        <p>
          At Bugalu Dance Studio, we are passionate about teaching and celebrating the art of dance. Whether you're a beginner or an experienced dancer, we have classes and workshops to suit your needs.
        </p>
      </section>
      <section className="home-features my-5">
        <h2>Upcoming Workshops</h2>
        <p>Check out our latest workshops and book your spot today!</p>
      </section>
      <section className="home-gallery my-5">
        <h2>Gallery</h2>
        <p>Explore photos and videos from our past events and performances.</p>
      </section>
      <section className="home-blog my-5">
        <h2>Blog</h2>
        <p>Stay updated with our latest news, dance tips, and inspiring stories.</p>
      </section>
      <footer className="home-footer my-5">
        <p>Follow us on social media:</p>
        <a href="https://facebook.com" className="btn btn-primary m-2">Facebook</a>
        <a href="https://instagram.com" className="btn btn-primary m-2">Instagram</a>
        <a href="https://twitter.com" className="btn btn-primary m-2">Twitter</a>
      </footer>
    </div>
  );
};

export default Home;
