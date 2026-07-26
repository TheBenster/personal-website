import { Link } from "react-router-dom";
import "../styles/portfolio-page.css";

const PortfolioItem = ({
  title,
  imageUrl,
  linkTo,
  altText,
  className = "",
  description,
  external = false,
  technologies = [],
}) => {
  const ItemWrapper = external ? "a" : Link;
  const linkProps = external
    ? { href: linkTo, target: "_blank", rel: "noopener noreferrer" }
    : { to: linkTo };

  return (
    <div className={`portfolio-item ${className}`}>
      <div className="portfolio-item-header">
        <h3 className="portfolio-item-title">{title}</h3>
        <p className="portfolio-item-description">{description}</p>
      </div>

      <ItemWrapper {...linkProps} className="portfolio-item-link">
        <div className="portfolio-image-container">
          <img className="port" src={imageUrl} alt={altText} />
          <div className="portfolio-overlay">
            <div className="portfolio-overlay-content">
              <span className="view-project">
                {external ? "View Project" : "Explore"}
              </span>
              {technologies.length > 0 && (
                <div className="tech-badges">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </ItemWrapper>
    </div>
  );
};

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "GlyphStack",
      description:
        "A Japanese SRS app covering 1,841 kanji, 214 radicals, and vocabulary across 212 frequency-ordered sets. Custom scheduling system, prerequisite gating, and a session flow I designed from scratch.",
      // [SCREENSHOT: GlyphStack dashboard showing SRS breakdown bar, review count, streak, and tier progress]
      imageUrl: "/img/glyphstack.png",
      linkTo: "/glyphstack",
      altText: "GlyphStack Japanese learning app",
      className: "web-apps",
      technologies: ["React", "Vite", "Tailwind", "Supabase"],
    },
    {
      title: "Synapse",
      description:
        "A follow-up to GlyphStack focused on the engine layer. Takes Anki deck imports, maps frequency data from corpora, and gates cards behind prerequisite kanji.",
      // [SCREENSHOT: Synapse card view showing locked card with prerequisite kanji blocking it]
      imageUrl: "/img/synapse.png",
      linkTo: "/synapse",
      altText: "Synapse SRS engine",
      className: "web-apps",
      technologies: ["FastAPI", "SQLite", "Vanilla JS"],
    },
    {
      title: "Client Work",
      description:
        "A. Wright Choice (home inspection website) and Hernandez Detailing (brand identity and visual design).",
      imageUrl: "/img/awrightchoice.png",
      linkTo: "/websites",
      altText: "Client web development projects",
      className: "web-apps",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Design Projects",
      description:
        "Brand design and visual work, including logo concepts and marketing materials.",
      imageUrl: "/img/designs.png",
      linkTo: "/designs",
      altText: "Design portfolio",
      className: "design",
      technologies: ["Illustrator", "Figma", "Photoshop"],
    },
    {
      title: "Photography",
      description: "A selection of photographic work.",
      imageUrl: "/img/temporality_fleeting.JPG",
      linkTo: "/photography",
      altText: "Photography portfolio",
      className: "photography",
      technologies: ["Canon M50 MkII", "Lightroom"],
    },
  ];

  const professionalHighlights = [
    {
      title: "Data Analyst",
      company: "Tetra Tech",
      description: (
        <>
          <p>
            W-2 contract supporting FEMA disaster recovery programs: Hurricane
            Helene response in NC and Iowa DCA case management.
          </p>
          <ul>
            <li>
              Built biweekly FEMA compliance report automation in Python with a
              tkinter GUI, replacing manual document production
            </li>
            <li>
              Developed Power BI dashboards for case management tracking and
              program reporting
            </li>
            <li>
              Wrote Python scripts for bulk CSV validation and analysis across
              FEMA program datasets
            </li>
            <li>
              Built SharePoint integrations to centralize reporting workflows
              and documentation
            </li>
          </ul>
        </>
      ),
      period: "Dec 2024 - Dec 2025",
    },
    {
      title: "Freelance Web Developer",
      company: "",
      description: (
        <ul>
          <li>
            <strong>A. Wright Choice</strong>: built the home inspection
            website, custom design, responsive layout, contact and booking flow
          </li>
          <li>
            <strong>Hernandez Detailing</strong>: brand identity and visual
            design, logo, color system, marketing materials
          </li>
        </ul>
      ),
      period: "2023 - Present",
    },
    {
      title: "Digital Media",
      company: "Davidson-Davie Community College",
      description: "Associate's | Applied Science in Digital Media",
      period: "July, 2024",
    },
  ];

  return (
    <section id="portfolio-page">
      <div className="portfolio">
        {/* Hero Section */}
        <div className="portfolio-hero">
          <h1 className="portfolio-header">Portfolio</h1>
          <p className="portfolio-subtitle">
            Web development, with some design and photography on the side.
          </p>
        </div>
        {/* Professional Highlights */}
        <div className="professional-highlights">
          <h2 className="section-title">Professional Experience</h2>
          <div className="highlights-grid">
            {professionalHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-header">
                  <h3>{highlight.title}</h3>
                  <span className="company">{highlight.company}</span>
                </div>
                <div className="highlight-description">
                  {highlight.description}
                </div>
                <span className="highlight-period">{highlight.period}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Portfolio Grid */}
        <div className="portfolio-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                linkTo={item.linkTo}
                altText={item.altText}
                className={item.className}
                external={item.external}
                technologies={item.technologies}
              />
            ))}
          </div>
        </div>
        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="skills-summary-header">
            <h2 className="section-title">Tech Stack & Tools</h2>
            <p className="skills-summary-subtitle">
              Technologies, frameworks, and creative software I work with across web development, data analysis, and media production.
            </p>
          </div>

          <div className="stack-grid">
            {[
              {
                title: "Front End",
                subtitle: "UI & Interactive Web",
                skills: [
                  { name: "React", iconClass: "devicon-react-original colored" },
                  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
                  { name: "Vite", iconClass: "devicon-vite-original colored" },
                  { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored" },
                  { name: "HTML5", iconClass: "devicon-html5-plain colored" },
                  { name: "CSS3", iconClass: "devicon-css3-plain colored" },
                  { name: "Sass", iconClass: "devicon-sass-original colored" },
                ],
              },
              {
                title: "Back End & Cloud",
                subtitle: "APIs, Engines & Storage",
                skills: [
                  { name: "Python", iconClass: "devicon-python-plain colored" },
                  { name: "FastAPI", isFastAPI: true },
                  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
                  { name: "Express", iconClass: "devicon-express-original" },
                  { name: "Supabase", isSupabase: true },
                  { name: "SQLite", iconClass: "devicon-sqlite-plain colored" },
                ],
              },
              {
                title: "Data & Analytics",
                subtitle: "Reporting & Automation",
                skills: [
                  { name: "Power BI", isPowerBI: true },
                  { name: "Python Scripts", iconClass: "devicon-python-plain colored" },
                  { name: "SharePoint", isSharePoint: true },
                ],
              },
              {
                title: "Testing & Tooling",
                subtitle: "QA & Development Workflow",
                skills: [
                  { name: "Vitest", iconClass: "devicon-vitest-plain colored" },
                  { name: "Git", iconClass: "devicon-git-plain colored" },
                  { name: "Vite", iconClass: "devicon-vite-original colored" },
                ],
              },
              {
                title: "Creative & Design",
                subtitle: "3D, Visual & Motion Design",
                skills: [
                  { name: "Blender", iconClass: "devicon-blender-original colored" },
                  { name: "Photoshop", iconClass: "devicon-photoshop-plain colored" },
                  { name: "After Effects", iconClass: "devicon-aftereffects-plain colored" },
                  { name: "Illustrator", isIllustrator: true },
                  { name: "Figma", isFigma: true },
                  { name: "Lightroom", isLightroom: true },
                ],
              },
            ].map((block, idx) => (
              <div key={idx} className="stack-block">
                <div className="stack-block-header">
                  <h3 className="stack-title">{block.title}</h3>
                  <span className="stack-category-subtitle">{block.subtitle}</span>
                </div>
                <div className="stack-list">
                  {block.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="stack-badge">
                      {skill.isPowerBI ? (
                        <svg className="stack-icon custom-svg" viewBox="0 0 24 24" fill="none">
                          <path d="M7 13H10V20H7V13Z" fill="#F2C811"/>
                          <path d="M11 9H14V20H11V9Z" fill="#F2C811"/>
                          <path d="M15 4H18V20H15V4Z" fill="#F2C811"/>
                        </svg>
                      ) : skill.isSharePoint ? (
                        <svg className="stack-icon custom-svg" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="microsoft-sharepoint_svg__Livello_1" viewBox="0 0 512 512">
                          <style>{`.microsoft-sharepoint_svg__st4{opacity:.2;enable-background:new}`}</style>
                          <circle cx="262" cy="148.8" r="142.9" style={{ fill: "#036c70" }} />
                          <circle cx="381" cy="279.8" r="131" style={{ fill: "#1a9ba1" }} />
                          <circle cx="279.8" cy="404.8" r="101.2" style={{ fill: "#37c6d0" }} />
                          <path d="M285.8 134.9V389c-.1 8.8-5.4 16.8-13.6 20.1-2.6 1.1-5.4 1.7-8.2 1.7h-85.3c-.1-2-.1-3.9-.1-6 0-2 0-4 .2-6 2.2-38.1 25.6-71.6 60.6-86.8v-22.1c-77.8-12.3-131-85.4-118.6-163.3.1-.5.2-1.1.3-1.6.6-4 1.4-8 2.5-11.9H264c12 .1 21.7 9.8 21.8 21.8" style={{ opacity: 0.1 }} />
                          <path d="M252.1 125h-131c-13.2 77.7 39 151.4 116.7 164.7 2.4.4 4.7.7 7.1 1-36.9 17.5-63.8 67.2-66.1 108.2-.2 2-.3 4-.2 6 0 2 0 3.9.1 6 .2 4 .7 8 1.5 11.9H252c8.8-.1 16.8-5.4 20.1-13.6 1.1-2.6 1.7-5.4 1.7-8.2V146.8c0-12-9.7-21.7-21.7-21.8" className="microsoft-sharepoint_svg__st4" />
                          <path d="M252.1 125h-131c-13.2 77.7 39 151.4 116.8 164.7 1.6.3 3.2.5 4.8.7-35.7 18.8-61.6 68.4-63.8 108.5h73.2c12-.1 21.7-9.8 21.8-21.8V146.8c-.1-12-9.8-21.7-21.8-21.8" className="microsoft-sharepoint_svg__st4" />
                          <path d="M240.2 125H121.1c-12.5 73.4 33.5 144 105.6 162.3-27.3 31.2-44.1 70.2-47.9 111.5h61.3c12 0 21.7-9.8 21.8-21.8V146.8c0-12-9.7-21.8-21.8-21.8" className="microsoft-sharepoint_svg__st4" />
                          <linearGradient id="microsoft-sharepoint_svg__SVGID_1_" x1="45.489" x2="216.395" y1="1562.036" y2="1266.033" gradientTransform="matrix(1 0 0 -1 0 1670)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#058f92" }} />
                            <stop offset=".5" style={{ stopColor: "#038489" }} />
                            <stop offset="1" style={{ stopColor: "#026d71" }} />
                          </linearGradient>
                          <path d="M21.8 125h218.3c12.1 0 21.8 9.8 21.8 21.8v218.3c0 12.1-9.8 21.8-21.8 21.8H21.8C9.8 387 0 377.2 0 365.2V146.8c0-12 9.8-21.8 21.8-21.8" style={{ fill: "url(#microsoft-sharepoint_svg__SVGID_1_)" }} />
                          <path d="M97.5 253.3c-5.1-3.4-9.4-7.9-12.5-13.2-3-5.5-4.5-11.8-4.3-18.1-.3-8.5 2.6-16.9 8.1-23.4 5.8-6.6 13.2-11.4 21.5-14 9.5-3.1 19.4-4.7 29.4-4.5 13.1-.5 26.2 1.4 38.7 5.4v27.4c-5.4-3.3-11.3-5.7-17.5-7.1-6.7-1.6-13.6-2.5-20.5-2.5-7.3-.3-14.5 1.3-21 4.5-5 2.2-8.3 7.1-8.3 12.6 0 3.3 1.3 6.5 3.6 9 2.7 2.8 6 5.1 9.5 6.8 4 2 9.9 4.6 17.9 7.9.9.3 1.7.6 2.5 1q11.7 4.65 22.5 11.1c5.4 3.4 10 7.9 13.3 13.4 3.4 6.2 5 13.2 4.8 20.2.4 8.8-2.3 17.4-7.6 24.4-5.3 6.4-12.3 11.2-20.2 13.6-9.3 2.9-19.1 4.3-28.9 4.2-8.8 0-17.5-.7-26.2-2.1-7.3-1.2-14.4-3.3-21.2-6.2v-28.9c6.5 4.6 13.7 8.1 21.4 10.2 7.7 2.4 15.6 3.7 23.6 3.8 7.4.5 14.8-1.1 21.4-4.5 4.6-2.6 7.4-7.5 7.3-12.8 0-3.7-1.4-7.2-4-9.8-3.3-3.2-7-5.8-11.2-7.8-4.8-2.4-11.8-5.5-21-9.4-7.4-3.1-14.5-6.8-21.1-11.2" style={{ fill: "#fff" }} />
                        </svg>
                      ) : skill.isFastAPI ? (
                        <svg className="stack-icon custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="52.5 49.42 64.18 63.98">
                          <g transform="matrix(.96564 0 0 .96252 -846.83 244.291)">
                            <circle style={{ fill: "#009688", fillOpacity: 0.980392, stroke: "none", strokeWidth: 0.141404, stopColor: "#000" }} cx="964.562" cy="-169.223" r="33.234" />
                            <path style={{ fill: "#fff", fillOpacity: 0.980392, stroke: "none", strokeWidth: 0.146895, stopColor: "#000" }} d="m962.269-187.408-6.645 14.803-3.036 6.764-6.644 14.804 30.591-21.568h-14.353l20.997-14.803z" />
                          </g>
                        </svg>
                      ) : skill.isIllustrator ? (
                        <svg className="stack-icon custom-svg" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
                          <path d="M90.7 6.4h330.7c50.1 0 90.7 40.5 90.7 90.7V415c0 50.1-40.5 90.7-90.7 90.7H90.7C40.5 505.6 0 465.1 0 414.9V97.1C0 46.9 40.5 6.4 90.7 6.4" style={{ fill: "#330000" }} />
                          <path d="M247.5 305.1h-79.4l-16.2 50.1c-.4 1.9-2.1 3.2-4.1 3h-40.1c-2.3 0-3-1.3-2.3-3.8l68.7-197.8c.6-2.1 1.3-4.5 2.1-7 .9-4.5 1.3-9.2 1.3-13.9-.2-1.1.6-2.1 1.7-2.3h55.3c1.7 0 2.6.6 2.8 1.7l77.9 219.7c.6 2.3 0 3.4-2.1 3.4h-44.6c-1.5.2-3-.9-3.4-2.3zm-67-43.3h54.2c-1.3-4.5-3-9.8-4.9-15.4-1.9-5.8-3.8-11.9-5.8-18.3-2.1-6.6-4.1-13-6.2-19.6s-4.1-12.8-5.8-19c-1.7-6-3.2-11.5-4.7-16.6h-.4c-1.9 9.2-4.3 18.3-7.3 27.5-3.2 10.2-6.4 20.9-9.8 31.6-2.9 10.8-6.1 20.8-9.3 29.8m182.2-91.1c-7 .2-13.9-2.6-19-7.5-4.9-5.3-7.5-12.4-7.3-19.6-.2-7.3 2.6-14.1 7.7-19s11.9-7.5 19-7.5c8.3 0 14.7 2.6 19.4 7.5 4.7 5.1 7.3 11.9 7 19 .2 7.3-2.3 14.3-7.5 19.6-4.8 5.1-12.1 7.9-19.3 7.5m-23.9 185.1V191.6c0-2.1.9-3 2.8-3h42.2c1.9 0 2.8 1.1 2.8 3v164.3c0 2.3-.9 3.4-2.8 3.4H342c-2.2 0-3.2-1.3-3.2-3.5" style={{ fill: "#ff9a00" }} />
                        </svg>
                      ) : skill.isLightroom ? (
                        <svg className="stack-icon custom-svg" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
                          <path d="M90.7 6.4h330.7C471.5 6.4 512 46.9 512 97v318c0 50.1-40.5 90.7-90.7 90.7H90.7C40.5 505.6 0 465.1 0 415V97C0 46.9 40.5 6.4 90.7 6.4" style={{ fill: "#001e36" }} />
                          <path d="M268.8 359.2H133.6c-2.4 0-3.4-1.2-3.4-3.8v-218c-.2-1.4.8-2.8 2.4-3h42.5c1-.2 2.4.6 2.4 1.8v179.7h98.6c2.2 0 2.8 1 2.4 3l-6.2 37.1c0 1-.6 2-1.2 2.6-.7.4-1.5.6-2.3.6m34.1-170.7h37.3c2.2 0 3.8 1.4 4.4 3.4.8 1.4 1.4 3.2 1.8 5 .4 2.2.8 4.4 1 6.6.2 2.4.4 5 .4 7.6 6.4-7.4 14.2-13.6 22.8-18.4 9.8-5.4 20.8-8 31.8-7.6 1.4-.2 2.8.8 3 2.4V230c0 1.8-1 2.4-3.4 2.4-13.8-.8-27.8 1.8-40.3 7.2-4.2 2-8.4 4.4-11.6 8v108.8c0 2.2-.8 3-2.8 3h-41.5c-1.8.2-3.2-.8-3.4-2.6v-119c0-5.2 0-10.4-.2-16s-.2-11.2-.4-16.6c-.2-4.8-.6-9.4-1.2-14.2-.2-1 .4-2.2 1.4-2.4.3-.3.5-.3.9-.1" style={{ fill: "#31a8ff" }} />
                        </svg>
                      ) : skill.isSupabase ? (
                        <svg className='stack-icon custom-svg' viewBox='0 0 512 512' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                          <linearGradient id="a" x1="237.109" x2="419.106" y1="223.219" y2="146.89" gradientTransform="matrix(1 0 0 -1 0 513)" gradientUnits="userSpaceOnUse"><stop offset="0" style={{ stopColor: "#249361"}}/>
                            <stop offset="1" style={{ stopColor:"#3ecf8e"}}/>
                            </linearGradient>
                            <path d="M297.6 501c-12.9 16.3-39.2 7.4-39.5-13.4L253.6 183h204.8c37.1 0 57.8 42.8 34.7 71.9z" style={{ fill:"url(#a)"}}/>
                            <linearGradient id="b" x1="245.829" x2="328.829" y1="411.681" y2="255.438" gradientTransform="matrix(1 0 0 -1 0 513)" gradientUnits="userSpaceOnUse">
                              <stop offset="0" style={{ stopColor:"#000"}}/>
                              <stop offset="1" style={{ stopColor:"#000", stopOpacity:0}}/>
                            </linearGradient><path d="M297.6 501c-12.9 16.3-39.2 7.4-39.5-13.4L253.6 183h204.8c37.1 0 57.8 42.8 34.7 71.9z" style={{ fill:"url(#b)", fillOpacity:0.2}}/>
                            <path d="M214.4 11c12.9-16.3 39.2-7.4 39.5 13.4l2 304.5H53.7c-37.1 0-57.8-42.8-34.7-71.9z" style={{ fill:"#3ecf8e"}}/>
                        </svg>
                      ) : skill.isFigma ? (
                        <svg className="stack-icon custom-svg" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 200 300">
                          <style>{`.st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}`}</style>
                          <path id="path0_fill" className="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/>
                          <path id="path1_fill" className="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
                          <path id="path1_fill_1_" className="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/>
                          <path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
                          <path id="path3_fill" className="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
                        </svg>
                      ) : (
                        <i className={`stack-icon ${skill.iconClass}`}></i>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="portfolio-cta">
          <h2>Ready to collaborate?</h2>
          <p>
            If you have a project in mind or just want to talk, get in touch.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary">
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
