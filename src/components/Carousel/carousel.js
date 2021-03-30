import React from "react";
import Carousel from "react-bootstrap/Carousel";
import heart from "./heart.jpg";
import computer from "./computer.jpg";
import sign from "./sign.jpg";

function carousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={heart} alt="First slide" />
        <Carousel.Caption>
          <h1>About Me</h1>
          <h4>Learn more about me and my joruney to become a web developer.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={computer} alt="Second slide" />

        <Carousel.Caption>
          <h1>My Portfolio</h1>
          <h4>Click here to see some of the amizing things I have created.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sign} alt="Third slide" />

        <Carousel.Caption>
          <h1>Contact</h1>
          <h4>Click here to see how to get in touch with me.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
