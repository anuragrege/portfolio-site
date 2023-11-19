import React from "react";

const Academics = () => {
  return (
    <section id="acad" className="section">
      <u>
        <h2>Academics</h2>
      </u>
      <div className="academic-awards-section">
        <div className="academic-section">
          <div className="cgpa">
            <u>
              <h2>CGPA</h2>
            </u>
            <p>First Semester: 9.68</p>
            <p>Second Semester: 9.72</p>
            <p>Average CGPA: 9.70</p>
          </div>
        </div>
        <div className="awards-section">
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
        </div>
        <div class="achievements-section">
          <div class="achievements-list">
            <u>
              <h2>Standardized Exams</h2>
            </u>
            <ul>
              <li>Middle School and High School Scholarship Holder</li>
              <li>Ranked 2nd in District in MTSE examination in Standard 8</li>
              <li>
                3rd in school and 1st in boys in the school in 10th Board Exams
              </li>
              <li>97.80% in 10th boards with 100/100 in Sanskrit</li>
              <li>
                Highest Marks in Geography in 12th Board Examination in the
                District
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
