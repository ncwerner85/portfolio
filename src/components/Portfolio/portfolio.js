import React from "react";
import escape from "./escape.png"
import vacation from "./vacation.png";
import planner from "./planner.png";
import password from "./password.png";

function Portfolio() {
  return (
    <div>
      <h2 id="portfolio">Portfolio</h2>
      <br />

      <div className="row">
        <div className="col-md-7 order-md-2">
          <h2>
            Virtual Vacation.
            <span className="text-light">Take a trip from your home.</span>
          </h2>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <a href="https://ncwerner85.github.io/virtual_vacation/"></a>
          <img
            src={vacation}
            alt="Vacation website image"
            height="500px"
            width="500px"
          ></img>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Weekday Planner.
            <span className="text-light">
              A daily planner to help you stay on task.
            </span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5">
          <a href="https://ncwerner85.github.io/work_day_scheduler/"></a>
          <img
            src={planner}
            alt="Planner website image"
            height="500px"
            width="500px"
          ></img>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Password Generator.
            <span className="text-light">See for yourself.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <a href="https://ncwerner85.github.io/password_generator/"></a>
          <img
            src={password}
            alt="Passwrod generator website image"
            height="500px"
            width="500px"
          ></img>
        </div>
      </div>
      
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            The Escape Room.
            <span className="text-light">
              Escape while you still can!.
            </span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5">
          <a href="https://ncwerner85.github.io/work_day_scheduler/"></a>
          <img
            src={escape}
            alt="Planner website image"
            height="500px"
            width="500px"
          ></img>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
