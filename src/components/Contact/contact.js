import React from "react";

function contact() {
  return (
    <div className="row">
      <div className="col-md-7">
        <h2 id="contact">
          Contact Me.
          <span className="text-light">
            Please reach out to me with any inquires.
          </span>
        </h2>
        <div className="card">
          <h2 className="contact" className="card-title">
            Contact
          </h2>
          <div className="contact" className="card-body">
            <form action="https://formspree.io/f/mjvpggvb" method="POST">
              <div className="col-md-7">
                <label>
                  <div className="row">Name:</div>
                  <input type="text" name="_replyto" />
                </label>
              </div>
              <div className="col-md-7">
                <label>
                  <div className="row">Email:</div>
                  <input type="text" name="_replyto" />
                </label>
              </div>
              <div className="col-md-7">
                <label>
                  <div className="row">Message:</div>
                  <textarea name="message"></textarea>
                </label>
              </div>
              <button type="button" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
