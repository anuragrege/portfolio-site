import React from "react";
import { motion } from "framer-motion";

const viewanimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const Certificates = () => {
  return (
    <section id="cah" className="section">
      <u>
        <h2>Certifications and Hackathons</h2>
      </u>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={viewanimation}
      >
        <h2>Certifications</h2>
        <div className="certifications-section">
          <div class="certification">
            <img src="/assets/img/jscert.jpg" alt="Certificate 1" />
            <p>Programing With Javascript</p>
          </div>
          <div class="certification">
            <img src="/assets/img/iirs.jpg" alt="Certificate 2" />
            <p>IIRS Course on Geospatial Analysis</p>
          </div>
        </div>

        <div className="hackathons-section">
          <h2>Hackathons</h2>
          <br />
          <ol>
            <li>SMART INDIA Hackathon 2023- Finalists</li>
            <li>OODP Hackathon SRMIST</li>
            <li>LAUNCHHACKS II Hackathon</li>
          </ol>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
