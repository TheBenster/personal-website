import { Link } from "react-router-dom";

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
                alt="Ben Beaver - Web Developer and Designer"
              />
            </div>
            <div className="about-intro">
              <p className="intro-text">
                I'm <span className="name">Ben</span>, a{" "}
                <span className="name">web developer</span> and{" "}
                <span className="name">designer</span> passionate about creating
                clean, functional websites that people enjoy using.
              </p>
              <p className="intro-text">
                I'm currently studying Digital Media at Davidson Davie Community
                College while working as a freelance developer, building custom
                websites and web applications for clients. I focus on{" "}
                <span className="name">responsive design</span> and{" "}
                <span className="name">user experience</span>, making sure every
                project works beautifully across all devices.
              </p>
              <p className="intro-text">
                Beyond code, I'm into photography, music production, and
                filmmaking. This creative background helps me approach web
                development with an eye for design and attention to detail.
              </p>
            </div>
          </div>

          <div className="bottom-half">
            <h2>My ever-growing tech stack:</h2>

            <div className="tech-cards">
              <div className="card-head">Languages</div>
              <div className="card-body">
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
                <i className="devicon-python-plain colored" title="Python"></i>
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
              <div className="card-head">Backend & Tools</div>
              <div className="card-body">
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                <i className="devicon-git-plain colored" title="Git"></i>
                <i className="devicon-github-original" title="GitHub"></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                  alt="Webpack"
                  className="tech-icon"
                  title="Webpack"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
              <p>Want to work together?</p>
              <Link to="/portfolio" className="btn">
                View my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
