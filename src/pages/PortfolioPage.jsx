import React from "react";
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
      title: "Data Analysis & Visualization",
      description:
        "Interactive dashboards and data analysis projects including disaster recovery analytics for Hurricane Helene and various business intelligence solutions.",
      imageUrl: "/img/data-analysis-preview.svg",
      linkTo: "/data-analysis",
      altText: "Data analysis and visualization projects",
      className: "data-analysis",
      technologies: ["Python", "Pandas", "Plotly", "Jupyter"],
    },
    {
      title: "Web Applications",
      description:
        "Full-stack web applications built with modern technologies, featuring responsive design and interactive user experiences.",
      imageUrl: "/img/web-apps-preview.svg",
      linkTo: "/websites",
      altText: "Web application projects",
      className: "web-apps",
      technologies: ["React", "Node.js", "CSS", "JavaScript"],
    },
    {
      title: "Photography Portfolio",
      description:
        "A curated collection of my photographic work exploring various styles and subjects, showcasing technical and artistic skills.",
      imageUrl: "/img/temporality_fleeting.JPG",
      linkTo: "/photography",
      altText: "Photography portfolio",
      className: "photography",
      technologies: ["Canon M50 MkII", "Lightroom", "Photoshop"],
    },
    {
      title: "Design Projects",
      description:
        "Brand design, logo concepts, and visual design work including rebrand concepts and marketing materials.",
      imageUrl: "/img/designs.png",
      linkTo: "/designs",
      altText: "Design portfolio",
      className: "design",
      technologies: ["Illustrator", "Figma", "Photoshop"],
    },
  ];

  const professionalHighlights = [
    {
      title: "Data Analyst",
      company: "Tetratech",
      description:
        "Leading data analysis for Hurricane Helene disaster recovery efforts",
      period: "2024 - Present",
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      description: "Building custom websites and web applications",
      period: "2023 - Present",
    },
  ];

  return (
    <section id="portfolio-page">
      <div className="portfolio">
        {/* Hero Section */}
        <div className="portfolio-hero">
          <h1 className="portfolio-header">Portfolio</h1>
          <p className="portfolio-subtitle">
            Data Analysis • Web Development • Design • Photography
          </p>
          <p className="portfolio-intro">
            A collection of my professional work as a Data Analyst at Tetratech
            and freelance web developer, showcasing projects that combine
            analytical expertise with creative problem-solving.
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
                <p className="highlight-description">{highlight.description}</p>
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
          <h2 className="section-title">Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Data Analysis</h3>
              <ul>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
                <li>Dashboard Creation</li>
                <li>Disaster Recovery Analytics</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <ul>
                <li>Full-Stack Development</li>
                <li>Responsive Design</li>
                <li>React Applications</li>
                <li>Database Integration</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Creative Skills</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Brand Design</li>
                <li>Photography</li>
                <li>Visual Storytelling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="portfolio-cta">
          <h2>Ready to collaborate?</h2>
          <p>
            Whether you need data analysis, web development, or creative
            solutions, I'd love to discuss how we can work together.
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
