import React from "react";
import { motion } from "framer-motion";

const leftanimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <u>
        <h2>Skills</h2>
      </u>
      <div className="skills-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/css.png" alt="CSS" />
            <p>CSS</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/js.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/logo192.png" alt="React" />
            <p>React</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/nextjs.png" alt="React" />
            <p>Next.JS</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/gatsby.png" alt="React" />
            <p>Gatsby</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/gee.png" alt="React" />
            <p>Earth Engine</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/gits.png" alt="Git" />
            <p>Git</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/framer.png" alt="Framer" />
            <p>Framer Motion</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/c.png" alt="C" />
            <p>C</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/c++.png" alt="C++" />
            <p>C++</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftanimation}
          className="skill"
        >
          <div className="skill">
            <img src="/assets/icons/java.png" alt="Java" />
            <p>Java</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
