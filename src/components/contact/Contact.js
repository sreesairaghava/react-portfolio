import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <span>Contact</span>
      <div className="subtitle">
        Leave your details here, I’ll get in touch with you :)
      </div>
      <div className="contact-form">
        <form action="POST" className="form">
          <input
            type="text"
            placeholder="Enter your Name"
            className="contact-title"
          />
          <input type="text" placeholder="Email ID for Contact" />
          <input type="text" placeholder="Purpose of Contact" />
          <input type="text" placeholder="Mobile Number (optional)" />
          <br />
          <input type="submit" value="Get Back to Me :)" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
