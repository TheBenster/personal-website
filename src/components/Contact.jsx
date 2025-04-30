import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, message });
    // Reset form
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <div className="headr">Contact me</div>
        <div className="contact-form">
          <label htmlFor="email">Email:</label>
          <input
            pattern="[^ @]*@[^ @]*"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="submit">
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
