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
      title: "Web Development",
      description:
        "Client websites built with modern technologies, featuring responsive design and interactive user experiences.",
      imageUrl: "/img/awrightchoice.png",
      linkTo: "/websites",
      altText: "Web development projects",
      className: "web-apps",
      technologies: ["React", "CSS", "JavaScript", "Netlify"],
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
    {
      title: "Photography Portfolio",
      description:
        "A curated collection of my photographic work exploring various styles and subjects.",
      imageUrl: "/img/temporality_fleeting.JPG",
      linkTo: "/photography",
      altText: "Photography portfolio",
      className: "photography",
      technologies: ["Canon M50 MkII", "Lightroom", "Photoshop"],
    },
  ];

  const professionalHighlights = [
    {
      title: "Data Analyst",
      company: "Tetratech",
      description:
        "Working on Hurricane Helene disaster recovery efforts through data analysis and visualization",
      period: "Dec, 2024 - Dec, 2025",
    },
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      description:
        "Building custom websites and web applications with modern technologies",
      period: "2023 - Present",
    },
    {
      title: "Digital Media Student",
      company: "Davidson Davie Community College",
      description:
        "Studying web development, UX design, and digital media production",
      period: "Present",
    },
  ];

  return (
    <section id="portfolio-page">
      <div className="portfolio">
        {/* Hero Section */}
        <div className="portfolio-hero">
          <h1 className="portfolio-header">Portfolio</h1>
          <p className="portfolio-subtitle">
            Web Development • Design • Photography
          </p>
          <p className="portfolio-intro">
            A collection of my work as a freelance web developer and designer,
            showcasing projects that combine technical skills with creative
            problem-solving.
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
              <h3>Web Development</h3>
              <ul>
                <li>React & JavaScript</li>
                <li>Responsive Design</li>
                <li>CSS & Tailwind</li>
                <li>Node.js & Backend</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
                <li>Figma & Illustrator</li>
                <li>Visual Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Other Skills</h3>
              <ul>
                <li>Photography</li>
                <li>Adobe Creative Suite</li>
                <li>Git & Version Control</li>
                <li>Web Hosting & Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="portfolio-cta">
          <h2>Ready to collaborate?</h2>
          <p>
            Whether you need a website, design work, or creative solutions, I'd
            love to discuss how we can work together.
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
