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
      imageUrl: "/img/glyphstackapp.png",
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
      imageUrl: "/img/designs.png",
      linkTo: "#",
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
          <h2 className="section-title">Stack</h2>

          <div className="stack-grid">
            <div className="stack-block">
              <h3 className="stack-title">Front End</h3>
              <div className="stack-list">
                <i className="stack-icon devicon-html5-plain colored"></i>
                <i className="stack-icon devicon-css3-plain colored"></i>
                <i className="stack-icon devicon-javascript-plain colored"></i>
                <i className="stack-icon devicon-react-original colored"></i>
              </div>
            </div>
            <div className="stack-block">
              <h3 className="stack-title">Back End</h3>
              <div className="stack-list">
                <i className="stack-icon devicon-nodejs-plain colored"></i>
                <i className="stack-icon devicon-express-original"></i>
                <i className="stack-icon devicon-mongodb-plain colored"></i>
              </div>
            </div>
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
