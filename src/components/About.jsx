import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="top-half">
          <div className="headshot">
            <img
              className="headshot-img"
              src="./src/headshot.jpeg"
              alt="Profile headshot"
            />
          </div>
          <div className="about-intro">
            <p className="intro-text">
              Hello! I am a digital media student at Davidson Davie Community
              College currently getting my associates, apart from that I am
              teaching myself the ins and outs of
              <span className="name"> web development </span>
              and <span className="name"> user experience design. </span>
              <span id="misc">
                Other miscellaneous activities include music production,
                horticulture and film making.
              </span>
            </p>
          </div>
        </div>
        <div className="bottom-half">
          <h1>My ever growing tech stack:</h1>
          <div className="tech-cards">
            <div className="card-head">languages</div>
            <div className="card-body">
              <i id="svgs" className="devicon-javascript-plain colored"></i>
              <img
                style={{ height: "50px" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python icon"
              />
              <img
                style={{ height: "50px" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5 icon"
              />
              <img
                style={{ height: "50px" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3 icon"
              />
            </div>
          </div>
          <div className="tech-cards">
            <div className="card-head">frontend</div>
            <div className="card-body">
              <i className="devicon-react-original colored"></i>
              <i className="devicon-tailwindcss-plain colored"></i>
            </div>
          </div>
          <div className="tech-cards">
            <div className="card-head">backend</div>
            <div className="card-body">
              <i className="devicon-nodejs-plain colored"></i>
              <img
                style={{ height: "50px" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="Webpack icon"
              />
              <i className="devicon-jest-plain"></i>
              <i className="devicon-django-plain-wordmark"></i>
              <i className="devicon-flask-original-wordmark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
