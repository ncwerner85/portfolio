import React from "react";
import me from "./me.jpeg"

function about() {
  return (
      <div className="row">
        <div className="col-md-7">
          <h2 id="about_me">
            About Me
          </h2>
          <br />
          <p>
            Hello my name is Nicholas and I am an inspiring web developer. I am
            new to coding but I am very excited to learn and start on a new
            adventure.
          </p>
          <p>
            My career thus far has taken me from human resources to the fast
            paced world of recruiting/staffing and account management. I have
            overcome many challenges in my professional career and I am
            confident that web development will be a challenging and exciting
            new experience.
          </p>
          <p>
            In my free time I like spending time with my three dogs and my
            fiancé. I enjoy hiking and camping, knitting and crocheting and
            cooking. I also enjoy spending time with family and friends and
            playing board games.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={me}
            alt="Pic of me"
            width="500px"
            height="500px"
          />
        </div>
      </div>
  );
}

export default about;
