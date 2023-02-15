import React, { useRef } from "react";
import email from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    email
      .sendForm(
        "service_ez0wkmi",
        "template_bc3ksxv",
        form.current,
        "Bl5okIRFJYUOsJFNV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <section className="ContactBdy" id="Contact">
        <div className="contact-section">
          <div className="contact-info">
            <div>
              <i className="fas fa-map-marker-alt"></i>Greater Hyderabad,
              500090, Telangana, India.
            </div>
            <div>
              <i className="fas fa-envelope"></i>tannirusrija@gmail.com
            </div>
            <div>
              <i className="fas fa-phone"></i>+91 9666 576 331
            </div>
            <div>
              <i className="fas fa-clock"></i>Mon - Fri 9:00 AM to 6:00 PM
            </div>
          </div>
          <div className="contact-form">
            <h2>Contact Me</h2>
            <form ref={form} className="contact" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                className="text-box"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="text-box"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <input
                type="submit"
                name="submit"
                class="send-btn"
                value="Send"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
