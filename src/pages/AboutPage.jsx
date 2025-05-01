import React from "react";

const AboutPage = () => {
  return (
    <section id="about-page">
      <div className="about">
        <div className="about-content">
          <div className="top-half">
            <div className="headshot">
              <img
                className="headshot-img"
                src="/img/headshot.jpeg"
                alt="Profile headshot"
              />
            </div>
            <div className="about-intro">
              <p className="intro-text">
                I'm a self-taught <span className="name">web developer</span>{" "}
                and aspiring <span className="name">UX designer</span>{" "}
                passionate about creating engaging digital experiences. My
                background spans various creative disciplines including music
                production, horticulture, and filmmaking, which gives me a
                unique perspective when approaching design challenges. I'm
                constantly expanding my technical skills through hands-on
                projects and staying current with emerging technologies and
                design trends.
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

                <i class="devicon-sass-original"></i>
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
                <i class="devicon-mongodb-plain"></i>
              </div>
            </div>
            <div className="tech-cards">
              <div className="card-head">tools</div>
              <div className="card-body">
                <i className="devicon-git-plain colored"></i>
                <i className="devicon-github-original"></i>
                <i className="devicon-npm-original-wordmark colored"></i>
                <i className="devicon-vscode-plain colored"></i>

                <img
                  style={{ height: "50px" }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg"
                />

                <img
                  style={{ height: "50px", margin: "0", padding: "0" }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
