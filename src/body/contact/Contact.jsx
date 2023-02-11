import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="work-title">Contact me</h1>
        <p className="work-desc">
          If you’d like to chat about a project or just have question, please
          fill in the form below. I aim to get back within 2 days.
        </p>

        <form action="#">
          <div className="nameContact">
            <div className="form-name">
              <label htmlFor="name">
                NAME <span>*</span>
              </label>
              <input type="text" id="name" />
            </div>
            <div className="form-email">
              <label htmlFor="email">
                EMAIL <span>*</span>
              </label>
              <input type="text" id="email" />
            </div>
          </div>
          <div className="form-subject">
            <label htmlFor="subject">
              SUBJECT <span>*</span>
            </label>
            <input type="text" id="subject" />
          </div>
          <div className="form-message">
            <label htmlFor="message">
              MESSAGE <span>*</span>
            </label>
            <textarea type="text" id="message" />
          </div>
          <button className="sendMsg">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
