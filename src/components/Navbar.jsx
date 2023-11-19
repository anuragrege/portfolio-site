import React from "react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
