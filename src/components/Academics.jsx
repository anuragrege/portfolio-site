import React from "react";
import { motion } from "framer-motion";

const viewanimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3.5 } },
};

const Academics = () => {
  return (
    <section id="acad" className="section">
      <u>
        <h2>Academics</h2>
      </u>
      <div className="academic-awards-section">
        <div className="academic-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={viewanimation}
            whileHover={{ scale: 1.03 }}
          >
            <div className="cgpa">
              <u>
                <h2>CGPA</h2>
              </u>
              <p>First Semester: 9.68</p>
              <p>Second Semester: 9.72</p>
              <p>Third Semester: 9.83</p>
              <p>Fourth Semester: 9.60</p>
              <p>Average CGPA: 9.71</p>
            </div>
          </motion.div>
        </div>
        <div className="awards-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={viewanimation}
            whileHover={{ scale: 1.03 }}
          >
            <div class="awards-list">
              <u>
                <h2>Awards/Achievements</h2>
              </u>
              <ul>
                <li>Outstanding Achievement Award- Standard 9</li>
                <li>Prefect of the Class in Standard 5,8,9</li>
                <li>House Captain in Standard 10</li>
                <li>Academic Performance Award- Standard 8</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div class="achievements-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={viewanimation}
            whileHover={{ scale: 1.03 }}
          >
            <div class="achievements-list">
              <u>
                <h2>Standardized Exams</h2>
              </u>
              <ul>
                <li>Middle School and High School Scholarship Holder</li>
                <li>
                  Ranked 2nd in District in MTSE examination in Standard 8
                </li>
                <li>
                  3rd in school and 1st in boys in the school in 10th Board
                  Exams
                </li>
                <li>97.80% in 10th boards with 100/100 in Sanskrit</li>
                <li>
                  Highest Marks in Geography in 12th Board Examination in the
                  District
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
