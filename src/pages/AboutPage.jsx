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
                alt="Ben Beaver - Data Analyst and Web Developer"
              />
            </div>
            <div className="about-intro">
              <p className="intro-text">
                I'm <span className="name">Ben</span>, a{" "}
                <span className="name">Data Analyst</span> at{" "}
                <span className="name">Tetratech</span>, where I'm currently
                working on critical disaster recovery efforts for Hurricane
                Helene. I'm passionate about using data and technology to make a
                real impact in people's lives.
              </p>
              <p className="intro-text">
                My journey combines data analysis with{" "}
                <span className="name">web development</span> and{" "}
                <span className="name">UX design</span> skills, allowing me to
                create comprehensive digital solutions that are both
                analytically sound and user-friendly. I'm completing my
                associate's degree in Digital Media at Davidson Davie Community
                College while gaining real-world experience in the field.
              </p>
              <p className="intro-text">
                My diverse background in music production, horticulture, and
                filmmaking gives me a unique creative perspective that I bring
                to every project. I believe the best solutions come from the
                intersection of{" "}
                <span className="name">data-driven insights</span>,{" "}
                <span className="name">technical excellence</span>, and{" "}
                <span className="name">human-centered design</span>.
              </p>
            </div>
          </div>

          <div className="bottom-half">
            <h2>My ever-growing tech stack:</h2>

            <div className="tech-cards">
              <div className="card-head">Data Analysis & Languages</div>
              <div className="card-body">
                <i className="devicon-python-plain colored" title="Python"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="tech-icon"
                  title="HTML5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="tech-icon"
                  title="CSS3"
                />
                <i
                  className="devicon-pandas-original colored"
                  title="Pandas"
                ></i>
                <i className="devicon-numpy-original colored" title="NumPy"></i>
              </div>
            </div>

            <div className="tech-cards">
              <div className="card-head">Frontend Development</div>
              <div className="card-body">
                <i className="devicon-react-original colored" title="React"></i>
                <i
                  className="devicon-tailwindcss-plain colored"
                  title="Tailwind CSS"
                ></i>
                <i className="devicon-sass-original colored" title="Sass"></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg"
                  alt="Vite"
                  className="tech-icon"
                  title="Vite"
                />
              </div>
            </div>

            <div className="tech-cards">
              <div className="card-head">Backend & Database</div>
              <div className="card-body">
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                <i
                  className="devicon-django-plain-wordmark colored"
                  title="Django"
                ></i>
                <i
                  className="devicon-flask-original-wordmark colored"
                  title="Flask"
                ></i>
                <i
                  className="devicon-mongodb-plain colored"
                  title="MongoDB"
                ></i>
                <i
                  className="devicon-postgresql-plain colored"
                  title="PostgreSQL"
                ></i>
                <i className="devicon-mysql-plain colored" title="MySQL"></i>
              </div>
            </div>

            <div className="tech-cards">
              <div className="card-head">
                Data Visualization & Analysis Tools
              </div>
              <div className="card-body">
                <i
                  className="devicon-jupyter-plain colored"
                  title="Jupyter"
                ></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
                  alt="Matplotlib"
                  className="tech-icon"
                  title="Matplotlib"
                />
                <i
                  className="devicon-plotly-original colored"
                  title="Plotly"
                ></i>
                <img
                  src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
                  alt="Seaborn"
                  className="tech-icon"
                  title="Seaborn"
                  style={{ filter: "brightness(1.2)" }}
                />
              </div>
            </div>

            <div className="tech-cards">
              <div className="card-head">Development Tools & Workflow</div>
              <div className="card-body">
                <i className="devicon-git-plain colored" title="Git"></i>
                <i className="devicon-github-original" title="GitHub"></i>
                <i className="devicon-vscode-plain colored" title="VS Code"></i>
                <i className="devicon-jest-plain colored" title="Jest"></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
                  alt="Vitest"
                  className="tech-icon"
                  title="Vitest"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                  alt="Webpack"
                  className="tech-icon"
                  title="Webpack"
                />
              </div>
            </div>

            {/* Professional Experience Highlight */}
            <div className="experience-highlight">
              <h3>Current Focus</h3>
              <p>
                Working as a{" "}
                <span className="name">Data Analyst at Tetratech</span>,
                contributing to Hurricane Helene disaster recovery efforts
                through data analysis and visualization. Combining analytical
                expertise with web development skills to create impactful
                solutions for real-world challenges.
              </p>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
              <p>Interested in data-driven solutions or web development?</p>
              <a href="/portfolio" className="btn">
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
