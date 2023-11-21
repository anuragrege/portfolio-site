import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <u>
          <h2>Contact Me</h2>
        </u>
        <div className="contact-section">
          <ul className="contact-info">
            <li>
              <span className="label">
                {" "}
                <img src="/assets/icons/name.png" alt="name" />
                Name:
              </span>{" "}
              Anurag Rege
            </li>
            <li>
              <span className="label">
                <img src="/assets/icons/emai.png" alt="email" />
                Email:
              </span>{" "}
              anuragrege@gmail.com
            </li>
            <li>
              <span className="label">
                <img src="/assets/icons/call.png" alt="call" />
                Contact:
              </span>{" "}
              +91 8600444594
            </li>
          </ul>
        </div>
        <div className="contact-section">
          <form
            action="https://formsubmit.co/f8df3ad586785dd3d61880e2b92e0927"
            method="POST"
          >
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
