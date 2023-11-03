import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img className="logo" src="/assets/img/logo-color.png" alt="mylogo" />
        </div>
        <ul className="nav-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#academic">Academics</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="photo">
            <img
              className="img1"
              src="/assets/img/portfolio.png"
              alt="myImage"
            />
          </div>
          <div className="intro">
            <h1>Welcome to My Portfolio</h1>
            <p>
              Welcome to my digital realm. I'm a passionate web developer with a
              love for crafting exceptional online experiences. Explore my work,
              discover my skills, and let's connect to bring your ideas to life
              in the digital world!
            </p>
            <img className="icons" src="/assets/icons/git.png" alt="git" />
            <img
              className="icons"
              src="/assets/icons/linkedin.png"
              alt="linkedin"
            />
            <img className="icons" src="/assets/icons/insta.png" alt="insta" />
          </div>
        </div>
      </section>
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
              I developed a website for Arisepoint, a company specializing in
              the digital marketing domain, which was integral to the company as
              it needed to extend its outreach{" "}
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
              student run club which focuses of IOS and Swift focused
              development. I am a member of their web development team{" "}
            </p>
            <a href="https://sccwebsite.netlify.app/" target="blank">
              View Project
            </a>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <u>
          <h2>Skills</h2>
        </u>
        <div className="skills-section">
          <div className="skill">
            <img src="/assets/icons/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/css.png" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/js.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src="/logo192.png" alt="React" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/gits.png" alt="Git" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/mongo.png" alt="Mongo" />
            <p>MONGODB</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/c.png" alt="C" />
            <p>C</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/c++.png" alt="C++" />
            <p>C++</p>
          </div>
          <div className="skill">
            <img src="/assets/icons/java.png" alt="Java" />
            <p>Java</p>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
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
            action="https://formsubmit.co/anuragrege@gmail.com"
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
      </section>
    </div>
  );
}

export default App;
