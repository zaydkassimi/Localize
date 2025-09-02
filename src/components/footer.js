/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../index.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="#"><img src="/logo.png" className="img-fluid" alt="LocaliZe Logo" /></a>
                </div>
                <div className="footer-text">
                  <p>Connecting people with amazing local businesses in Casablanca and beyond.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li><Link className="nav-linkk" aria-current="page" to={"/"}>Home</Link></li>
                  <li><Link className="nav-linkk" to={"/posts"}>All Businesses</Link></li>
                  <li><Link className="nav-linkk" to={"/search"}>Search</Link></li>
                  <li><Link className="nav-linkk" to={"/Login"}>Login</Link></li>
                  <li><Link className="nav-linkk" to={"/SingUp"}>Sign Up</Link></li>
                  <li><Link className="nav-linkk" to={"/page1"}>Add Business</Link></li>
                  <li><Link className="nav-linkk" to={"/contact"}>Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>&copy; {new Date().getFullYear()} Copyright {' '} <a href="#">LocaliZe.</a> All Rights Reserved </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
