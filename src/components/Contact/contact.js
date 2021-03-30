import React from "react";

function contact() {
  return (
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Contact Me.
          <span class="text-light">
            Please reach out to me with any inquires.
          </span>
        </h2>
        <div class="card">
          <h2 class="contact" class="card-title">
            Contact
          </h2>
          <div class="contact" class="card-body">
            <form action="https://formspree.io/f/mjvpggvb" method="POST">
              <div class="col-12">
                <label>
                  <div class="row">Name:</div>
                  <input type="text" name="_replyto" />
                </label>
              </div>
              <div class="col-12">
                <label>
                  <div class="row">Email:</div>
                  <input type="text" name="_replyto" />
                </label>
              </div>
              <div class="col-12">
                <label>
                  <div class="row">Message:</div>
                  <textarea name="message"></textarea>
                </label>
              </div>
              <button type="button" class="btn btn-primary">
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
