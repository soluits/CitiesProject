import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="app-footer my2 bg-light cian">

      <div className="flex-row-container justify-content-between align-items-center">
        <div className="flex-row-item">      <a className=" menuFooter" href="#" >Cities</a>
        </div>
        <div className="flex-row-item"> <span className="copyText">Copyright © - MYTINERARY</span></div>
        <div className="flex-row-item menuFooter">     <FaFacebook /><FaTwitter /><FaInstagram />
        </div>
      </div>

    </footer>
  );
};

export default Footer;