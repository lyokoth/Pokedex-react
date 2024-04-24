import React from 'react';
import './Footer.css';
import pokeball from '../../assets/icons8-pokeball-48.png';
import github from '../../assets/icons8-github-48.png';

function Footer() {
  return (
    <footer className="footer">

     <div className="footer-container">
      
          <p className="footer-text">Created with 💗💗💗 by Lyn Okoth</p>
         
          <a href="https://github.com/lyokoth"><img src={github} alt="github"></img></a>
    </div>
    </footer>

  )
}

export default Footer;

// add navigation to the footer
