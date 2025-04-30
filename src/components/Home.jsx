import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="title-btn">
        <h1 className="title">
          Hi, i'm <span className="name">Ben</span>
        </h1>
        <h1 className="position">web developer and UX designer</h1>
        <a href="#portfolio-page" className="link-to">
          <button className="btn">view my work</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
