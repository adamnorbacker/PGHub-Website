import React from 'react';
import scrollDown from '../../../../utils';
import logo from '../../../../img/logo_transparent_shadow.png';

const Intro = () => {
  return (
    <section className="section intro">
      <div className="logoContainer fadeIn">
        <img className="logo" src={logo} alt="PGHub" title="PGHub"></img>
      </div>
      <div data-background="darkBlack" className="container fadeIn delay2s">
        <div className="textContainer">
          <h1>PGHub</h1>
        </div>
      </div>
      <i
        className="fas fa-arrow-down pulse scrollDown"
        onClick={scrollDown}
        title="Scroll down"
      ></i>
    </section>
  );
};

export default Intro;
