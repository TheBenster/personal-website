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
                  { name: "Vite", iconClass: "devicon-vitejs-plain colored" },
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
                  { name: "FastAPI", iconClass: "devicon-fastapi-plain colored" },
                  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
                  { name: "Express", iconClass: "devicon-express-original" },
                  { name: "Supabase", iconClass: "devicon-supabase-plain colored" },
                  { name: "SQLite", iconClass: "devicon-sqlite-plain colored" },
                ],
              },
              {
                title: "Data & Analytics",
                subtitle: "Reporting & Automation",
                skills: [
                  { name: "Power BI", isPowerBI: true },
                  { name: "Python Scripts", iconClass: "devicon-python-plain colored" },
                  { name: "SharePoint", iconClass: "devicon-windows8-original colored" },
                ],
              },
              {
                title: "Testing & Tooling",
                subtitle: "QA & Development Workflow",
                skills: [
                  { name: "Vitest", iconClass: "devicon-vitest-plain colored" },
                  { name: "Git", iconClass: "devicon-git-plain colored" },
                  { name: "Vite", iconClass: "devicon-vitejs-plain colored" },
                ],
              },
              {
                title: "Creative & Design",
                subtitle: "3D, Visual & Motion Design",
                skills: [
                  { name: "Blender", iconClass: "devicon-blender-original colored" },
                  { name: "Photoshop", iconClass: "devicon-photoshop-plain colored" },
                  { name: "After Effects", iconClass: "devicon-aftereffects-plain colored" },
                  { name: "Illustrator", iconClass: "devicon-illustrator-plain colored" },
                  { name: "Figma", iconClass: "devicon-figma-plain colored" },
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
                      ) : skill.isLightroom ? (
                        <svg className="stack-icon custom-svg" viewBox="0 0 24 24">
                          <rect width="24" height="24" rx="4" fill="#001E36" />
                          <text x="4" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Lr</text>
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
