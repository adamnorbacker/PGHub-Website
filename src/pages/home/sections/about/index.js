import React from 'react';
import scrollDown from '../../../../utils';
import aboutImage from '../../../../img/bg.png';

const SmallAbout = () => {
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

export default SmallAbout;
