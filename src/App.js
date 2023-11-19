import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

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
        {this.state.loading ? <Loader /> : null}

        <div className={`App ${this.state.loading ? "hidden" : "visible"}`}>
          <Navbar />
          <Home />
          <Projects />
          <Skills />
          <Academics />
          <Experience />
          <Certificates />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
