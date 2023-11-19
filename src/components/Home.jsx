import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  {
    /*const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 3 } },
  };*/
  }

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  };

  {
    /*const icons = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 4 } },
  };*/
  }

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="photo">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <img
              className="img1"
              src="/assets/img/portfolio.png"
              alt="myImage"
            />
          </motion.div>
        </div>
        <div className="intro">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1>Welcome to My Portfolio</h1>
            <p>
              Welcome to my digital realm. I'm a passionate web developer with a
              love for crafting exceptional online experiences. Explore my work,
              discover my skills, and let's connect to bring your ideas to life
              in the digital world!
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
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
              <img
                className="icons"
                src="/assets/icons/insta.png"
                alt="insta"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
