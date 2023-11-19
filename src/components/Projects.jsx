import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <u>
        <h2>Projects</h2>
      </u>
      <div className="projects-grid">
        <div className="project">
          <img
            src="/assets/img/dqcare.png"
            alt="Project 1"
            className="projectimg"
          />
          <h3>DQCARE Website</h3>
          <p>
            I created a website for DQCARE, a startup focused on enhancing
            well-being with technology-driven personalized care during the
            course of my internship at WictroniX{" "}
          </p>
          <a href="https://dqcare.in" target="blank">
            View Project
          </a>
        </div>

        <div className="project">
          <img src="/assets/img/arise.png" alt="Project 2" />
          <h3>ArisePoint Website</h3>
          <p>
            I developed a website for Arisepoint, a company specializing in the
            digital marketing domain, which was integral to the company as it
            needed to extend its outreach{" "}
          </p>
          <a href="https://arisepoint.in/" target="blank">
            View Project
          </a>
        </div>

        <div className="project">
          <video autoPlay loop muted>
            <source src="/assets/vid/scc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>SCC SRM Website</h3>
          <p>
            I developed a website of the Swift Coding Club @SRMIST which is a
            student run club which focuses of IOS and Swift focused development.
            I am a member of their web development team{" "}
          </p>
          <a href="https://sccwebsite.netlify.app/" target="blank">
            View Project
          </a>
        </div>

        <div className="project">
          <img src="/assets/img/pps.png" alt="Project 4" />
          <h3>Timetable/Mess Menu Displayer</h3>
          <p>
            Me and my teammate made an application that displays the mess menu,
            timetable of the students and thus calculates students' free time
            based on various inputs. Just with a few clicks, the user can easily
            see the timetable and the menu. This saves the user the time to take
            out his batch timetable and match with his timetable. It also
            enables the user to see the mess menu without requiring to open his
            phone to see the photo captured of the menu.{" "}
          </p>
          <a
            href="https://drive.google.com/file/d/1seD3vyo57U61rX4sYuL8DBFTcyEy5erv/view?usp=sharing"
            target="blank"
          >
            View Project
          </a>
        </div>

        <div className="project">
          <img src="/assets/img/oodp.png" alt="Project 5" />
          <h3>Restaurant Billing/Employee Management System</h3>
          <p>
            I developed an application that generates the bill of the customer
            and also can access and edit employee information{" "}
          </p>
          <a
            href="https://drive.google.com/file/d/1dxuv-369MRPdIxVijYK70nEeWg1bP22Y/view?usp=sharing"
            target="blank"
          >
            View Project
          </a>
        </div>

        <div className="project">
          <img src="/assets/img/sih.png" alt="Project 6" />
          <h3>DeHazer Algorithm: SIH 2023</h3>
          <p>
            Me and my teammates have devised an innovative solution for
            de-hazing video footage for firefighters in indoor fires. It
            consists of a ML model which takes input as the hazed video feed and
            gives a real time dehazed output so that firefighters can carry out
            thir operation easily. We have qualified for the Nationals 2023.{" "}
          </p>
          <a href="#projects">Project Confidential</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
