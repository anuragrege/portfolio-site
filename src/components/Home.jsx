import React from "react";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="photo">
          <img className="img1" src="/assets/img/portfolio.png" alt="myImage" />
        </div>
        <div className="intro">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Welcome to my digital realm. I'm a passionate web developer with a
            love for crafting exceptional online experiences. Explore my work,
            discover my skills, and let's connect to bring your ideas to life in
            the digital world!
          </p>
          <a href="https://github.com/anuragrege" target="blank">
            <img className="icons" src="/assets/icons/git.png" alt="git" />
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
            <img className="icons" src="/assets/icons/insta.png" alt="insta" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
