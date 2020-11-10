import React from 'react';
import scrollDown from '../../utils';
import logo from '../../img/logo_transparent_shadow.png';
import aboutImage from '../../img/bg.png';
import './home.css';

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

const ShortAbout = () => {
  return (
    <section className="section about">
      <div data-background="darkBlack" className="container">
        <div className="textContainer">
          <h2>About</h2>
        </div>
      </div>
      <div
        data-background="darkBlack"
        data-columns="2"
        className="container grid grid2col"
      >
        <div className="imageContainer">
          <img
            className="inlineImage"
            src={aboutImage}
            alt="Image taken inside Witcher 3 Cathedral"
            title="Image taken inside Witcher 3 Cathedral"
          ></img>
        </div>
        <div className="textContainer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
            quam, pharetra non dictum a, dictum vel nisl. Etiam gravida
            malesuada convallis. Maecenas sodales quis urna ut convallis. Sed
            massa nunc, placerat at facilisis ac, venenatis vitae nibh. Donec
            quis ipsum vitae ligula lobortis dapibus.
          </p>
          <p>
            Pellentesque blandit enim enim. Phasellus viverra, nulla ut
            malesuada posuere, purus risus aliquet mi, eu volutpat tortor urna
            ac justo. Morbi vulputate elit condimentum, malesuada ex convallis,
            malesuada arcu. Cras eu ex ante. Etiam non sagittis ex.
          </p>
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

const Works = () => {
  return (
    <section className="section works">
      <div data-background="darkBlack" className="container">
        <div className="textContainer">
          <h2>My Work</h2>
        </div>
      </div>
      <div
        data-background="darkBlack"
        data-columns="2"
        className="container grid grid2col"
      >
        <div className="textContainer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
            quam, pharetra non dictum a, dictum vel nisl. Etiam gravida
            malesuada convallis. Maecenas sodales quis urna ut convallis. Sed
            massa nunc, placerat at facilisis ac, venenatis vitae nibh. Donec
            quis ipsum vitae ligula lobortis dapibus.
          </p>
          <p>
            Pellentesque blandit enim enim. Phasellus viverra, nulla ut
            malesuada posuere, purus risus aliquet mi, eu volutpat tortor urna
            ac justo. Morbi vulputate elit condimentum, malesuada ex convallis,
            malesuada arcu. Cras eu ex ante. Etiam non sagittis ex.
          </p>
        </div>
        <div className="imageContainer">
          <img
            className="inlineImage"
            src={aboutImage}
            alt="Image taken inside Witcher 3 Cathedral"
            title="Image taken inside Witcher 3 Cathedral"
          ></img>
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

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <ShortAbout />
      <Works />
    </div>
  );
};
export default Home;
