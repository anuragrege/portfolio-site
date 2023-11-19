import React from "react";

const Experience = () => {
  return (
    <section id="exp" className="section">
      <u>
        <h2>Experience</h2>
      </u>
      <div className="experience-section">
        <div className="experience-line"></div>
        <div className="experience">
          <div className="experience-content">
            <h2>Global Talent Mentoring</h2>
            <p>
              Mentee at Global Talent Mentoring, a Germany based organizaton
              that provide mentoring to gifted students by highly intellectual
              professors from universities all over the globe
            </p>
            <p>APRIL 2022-Present</p>
            <a href="https://globaltalentmentoring.org/" target="blank">
              <img
                src="/assets/icons/gtm.png"
                className="expimg"
                alt="Experience 1"
              />
            </a>
          </div>
        </div>
        <div className="experience1">
          <div className="experience-content">
            <h2>SCCSRM</h2>
            <p>
              Member of the Web Development team of Swift Coding Club SRM which
              focuses on Swift language and IOS Development
            </p>
            <p>OCTOBER 2022-Present</p>
            <a href="https://sccwebsite.netlify.app/" target="blank">
              <img
                src="/assets/icons/scclogo.png"
                className="expimg"
                alt="Experience 2"
              />
            </a>
          </div>
        </div>
        <div className="experience">
          <div className="experience-content">
            <h2>Alexa Developers SRM</h2>
            <p>
              Member of the Creative and Technical Team at a student club
              officially affiliated with Amazon Alexa
            </p>
            <p>NOVEMBER 2022-Present</p>
            <a href="https://alexadevsrm.com/" target="blank">
              <img
                src="/assets/icons/alexa.png"
                className="expimg"
                alt="Experience 3"
              />
            </a>
          </div>
        </div>
        <div className="experience1">
          <div className="experience-content">
            <h2>WictroniX</h2>
            <p>
              Front end Developer Intern @WictroniX, a startup Company based in
              Surat that provides digital solutions to other companies
            </p>
            <p>AUGUST 2023 - OCTOBER 2023</p>
            <a href="https://wictronix.com/" target="blank">
              <img
                src="/assets/icons/wictroniX.png"
                className="expimg"
                alt="Experience 4"
              />
            </a>
          </div>
        </div>
        <div className="experience">
          <div className="experience-content">
            <h2>MLSA SRM</h2>
            <p>
              Associate Technical Lead at Microsoft Learn Student Ambassadors
              SRM, heading the Webdev Domain. Part of the core team.
            </p>
            <p>SEPTEMBER 2023-Present</p>
            <a href="https://in.linkedin.com/company/mlsa-srm" target="blank">
              <img
                src="/assets/icons/mlsa.png"
                className="expimg5"
                alt="Experience 5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
