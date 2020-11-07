import React from 'react';
import logo from './img/logo_transparent_shadow.png';
import './home.css';

const home = () => {
  return (
    <div className="home">
      <section className="section intro">
        <div className="logoContainer fadeIn">
          <img className="logo" src={logo} alt="PGHub" title="PGHub"></img>
        </div>
        <div data-background="darkBlack" className="container fadeIn delay2s">
          <div className="textContainer">
            <h1>PGHub</h1>
          </div>
        </div>
        <i className="fas fa-arrow-down pulse" title="Scroll down"></i>
      </section>
    </div>
  );
};

export default home;
