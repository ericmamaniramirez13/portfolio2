// Contact.js
import React from 'react';
//import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;