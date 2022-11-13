import React from "react";
import { Link } from "react-router-dom";
import footerBG from '../../assets/images/footer.png'

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <footer className="   mt-32" style={
        {backgroundImage: `url(${footerBG})`,
        backgroundSize: "cover"
        }}>
      <div className="footer px-24 " >
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <p className="link link-hover">New York - 101010 Hudson</p>
        </div>
      </div>
      <p className="text-center mt-10">Copyright {year} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
