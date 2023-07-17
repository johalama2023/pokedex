import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import './styles/Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-red">
        <Link to="/pokedex">
          <img src="/pokedex.png" className="header-img" />
        </Link>
        <div className="header-black"></div>
      </div>
    </div>
  );
};

export default Header;
