import React from 'react';

import logo from '../../assets/pokeball (1).jpg';
//import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// import { FaAngleDown } from 'react-icons/all-files/fa/FaAngleDown';
import './Nav.css';




const Nav = () => {
    return (
        <nav className="navigation">
            <img src={logo} alt="pokeball" className="logo" />
            <ul className="nav">
                <li className="link"><Link to="/">Home</Link></li>
              
                <li className="link"><Link to="/pokedex">Pokédex</Link></li>
                <li className="link">Team Builder</li>
                <li className="link"><a href="/#about">About</a></li>
                <li className="link"><Link to="/account">Account</Link></li>
      

            
         
               
            </ul>
        </nav>
    )
}
export default Nav;