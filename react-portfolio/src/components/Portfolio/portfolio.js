import React from "react";
import vacation from "./vacation.png"
import planner from "./planner.png"
import password from "./password.png"

function Portfolio() {
  return (
    <div>
      <h2 id="portfolio" class="featurette-heading">
        Portfolio
      </h2>
      <br />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Virtual Vacation.
            <span class="text-light">Take a trip from your home.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <a href="https://ncwerner85.github.io/virtual_vacation/">
          </a>
          <img
          src={vacation}
          alt="Vacation website image"
          height="500px"
            width="500px"
          >
                      
            </img>
        </div>
      </div>

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Weekday Planner.
            <span class="text-light">
              A dayly planner to help you stay on task.
            </span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <a href="https://ncwerner85.github.io/work_day_scheduler/">
          </a>
          <img
          src={planner}
          alt="Planner website image"
          height="500px"
            width="500px"
            >
            </img>
        </div>
      </div>

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Password Generator.
            <span class="text-light">See for yourself.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <a href="https://ncwerner85.github.io/password_generator/">
          </a>
          <img            
            src={password}
            alt="Passwrod generator website image"
            height="500px"
            width="500px"
            >
              
            </img>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
