import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
    <section className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form below.
        </p>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Contact;
