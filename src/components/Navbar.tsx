import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-main">
        <div className="navbar-social-icons">
          <FontAwesomeIcon className="navbar-social-icons-all"  icon={faFacebook}/>{" "}
          <FontAwesomeIcon className="navbar-social-icons-all" icon={faInstagram} />{" "}
          <FontAwesomeIcon className="navbar-social-icons-all" icon={faTwitter} />{" "}
          <FontAwesomeIcon className="navbar-social-icons-all" icon={faYoutube} />
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-auth">
          <Link className="login" to="/login">LOG IN</Link>
          <Link className="signup" to="/users">SIGN UP</Link>
        </div>
      </div>
      <div className="navbar-links">
        <Link className="home-link" to="/">HOME</Link>
        <Link className="starships-link" to="/starships">STARSHIPS</Link>
      </div>
      <div className="navbar-divider"></div>
    </nav>
  );
};

export default Navbar;
