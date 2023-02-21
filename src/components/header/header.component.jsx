import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <img src="images/crown.svg" alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
