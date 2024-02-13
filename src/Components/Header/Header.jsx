import React from "react";

import "./Header.css";
import logo from "../../assets/icons8-pokeball-64.png";

function Header() {
    return (
        <header className="header">
        <h1 className="header-title">
            <img src={logo} alt="pokeball" className="logo2" />
            Welcome to the Pokédex app!
            <img src={logo} alt="pokeball" className="logo2" />
            </h1>
            <p className="header-subtitle">Gotta catch 'em all!</p>
            <p className="header-subtitle">
                </p>
        </header>
    
           
  
    );
}
export default Header;
