import React from "react";
import Carousel from "react-bootstrap/Carousel";
import heart from './heart.jpg';
import computer from './computer.jpg';
import sign from './sign.jpg'

function carousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heart}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>About Me</h3>
          <p>Learn more about me and my joruney to become a web developer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={computer}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>My Portfolio</h3>
          <p>Click here to see some of the amizing things I have created.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sign}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Contact</h3>
          <p>
          Click here to see how to get in touch with me.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
