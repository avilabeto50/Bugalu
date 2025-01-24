import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom styles for colors

const Footer = () => {
  return (
    <footer className="footer bg-purple text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3>Bugalu Dance Co.</h3>
            <p>Ready to spice up your life with dance? Join the top RGV studio for expert Bachata, Salsa, 
                and Merengue lessons. Build confidence, master technique, and become the dancer you’ve 
                always wanted to be. Sign up today!</p>   
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.66885802397!2d-98.1983460685072!3d26.20744827171599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a0956867cff1%3A0x68396b109708bf8e!2s1200%20W%20Polk%20Ave%2C%20Pharr%2C%20TX%2078577!5e0!3m2!1sen!2sus!4v1737747275921!5m2!1sen!2sus"
                referrerpolicy="no-referrer-when-downgrade"
                width="375"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
          <div className="col-md-4 mb-4">
          <h3>Contact Info</h3>
          <p><div className="footer-item"> <button className="footer-button">
            <i className="fas fa-map-marker-alt"></i><i className="bi bi-geo-alt"></i>
            </button> 
            <span className="footer-text">1200 W Polk Ave. Suite K, Pharr TX. </span> </div></p>
            
          <p><div className="footer-item"> <button className="footer-button">
            <i className="fas fa-phone"></i><i className="bi bi-telephone"></i></button> 
            <span className="footer-text">+1 (956)-530-3183</span> </div></p>

            <p><div className="footer-item"> <button className="footer-button">
                <i className="fas fa-email"></i><i className="bi bi-envelope"></i></button> 
                <span className="footer-text">Bugaludancer@yahoo.com</span> </div></p>


          </div>
          <div className="col-md-4 mb-4">
            <h3>Quick Links</h3>
            <ul className="footer-text">
              <li><a href="#" className="text-white">Meet Our Instructors</a></li>
              <li><a href="#" className="text-white">Class Schedule</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">FAQ's</a></li>
            </ul>
            <div className="footer-buttons">
              <button className="footer-button"><i className="bi bi-facebook"></i></button>
              <button className="footer-button"><i className="bi bi-twitter"></i></button>
              <button className="footer-button"><i className="bi bi-instagram"></i></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
