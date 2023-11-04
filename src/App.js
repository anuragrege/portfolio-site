import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : null}

        <div className={`App ${this.state.loading ? "hidden" : "visible"}`}>
          <nav className="navbar">
            <div className="logo">
              <img
                className="logo"
                src="/assets/img/logo-color.png"
                alt="mylogo"
              />
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
                <a href="#acad">Academics</a>
              </li>
              <li>
                <a href="#exp">Experience</a>
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
                  Welcome to my digital realm. I'm a passionate web developer
                  with a love for crafting exceptional online experiences.
                  Explore my work, discover my skills, and let's connect to
                  bring your ideas to life in the digital world!
                </p>
                <a href="https://github.com/anuragrege" target="blank">
                  <img
                    className="icons"
                    src="/assets/icons/git.png"
                    alt="git"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/anurag-rege-820703251/"
                  target="blank"
                >
                  <img
                    className="icons"
                    src="/assets/icons/linkedin.png"
                    alt="linkedin"
                  />
                </a>
                <a href="https://www.instagram.com/regeanurag/" target="blank">
                  <img
                    className="icons"
                    src="/assets/icons/insta.png"
                    alt="insta"
                  />
                </a>
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
                  I developed a website for Arisepoint, a company specializing
                  in the digital marketing domain, which was integral to the
                  company as it needed to extend its outreach{" "}
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
                  I developed a website of the Swift Coding Club @SRMIST which
                  is a student run club which focuses of IOS and Swift focused
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
                    <li>
                      Ranked 2nd in District in MTSE examination in Standard 8
                    </li>
                    <li>
                      3rd in school and 1st in boys in the school in 10th Board
                      Exams
                    </li>
                    <li>97.80% in 10th boards with 100/100 in Sanskrit</li>
                    <li>
                      Highest Marks in Geography in 12th Board Examination in
                      the District
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

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
                    Mentee at Global Talent Mentoring, a Germany based
                    organizaton that provide mentoring to gifted students by
                    highly intellectual professors from universities all over
                    the globe
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
                    Member of the Web Development team of Swift Coding Club SRM
                    which focuses on Swift language and IOS Development
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
                    Front end Developer Intern @WictroniX, a startup Company
                    based in Surat that provides digital solutions to other
                    companies
                  </p>
                  <p>AUGUST 2023-Present</p>
                  <a href="https://wictronix.com/" target="blank">
                    <img
                      src="/assets/icons/wictroniX.png"
                      className="expimg"
                      alt="Experience 4"
                    />
                  </a>
                </div>
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
          </section>
        </div>
      </div>
    );
  }
}

export default App;
