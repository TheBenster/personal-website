import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="home">
        <div className="title-btn">
          <h1 className="title">
            Hi, I'm <span className="name">Ben</span>
          </h1>
          <h1 className="position">Data Analyst & Web Developer</h1>
          <Link to="/portfolio" className="link-to">
            <button className="btn">view my work</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
