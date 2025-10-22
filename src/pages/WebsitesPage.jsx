import React from "react";
import "../styles/websites-page.css";

const WebsiteProject = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink,
  metrics,
  highlights,
}) => {
  return (
    <div className="website-project">
      <div className="website-project-image">
        <img src={image} alt={title} />
        <div className="image-overlay">
          <span className="overlay-text">View Project</span>
        </div>
      </div>
      <div className="website-project-content">
        <h2 className="website-project-title">{title}</h2>
        <p className="website-project-description">{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="project-highlights">
            <h4>Key Features:</h4>
            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {metrics && (
          <div className="project-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="metric">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="website-project-technologies">
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="website-project-links">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="website-project-demo-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Live Site
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="website-project-code-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const WebsitesPage = () => {
  // Sample website projects - in a real app, you would fetch this from an API
  const websiteProjects = [
    {
      id: 1,
      title: "AWC Home Inspections Website",
      description:
        "Professional business website for a home inspection company featuring responsive design, optimized user experience, and clear call-to-actions to drive client conversions.",
      image: "/img/awrightchoice.png",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design", "Netlify"],
      demoLink: "https://awchomeinspections.com/",
      highlights: [
        "Mobile-first responsive design for seamless viewing on all devices",
        "Optimized attentional hierarchy to guide users to contact forms",
        "Fast load times with performance optimization",
        "Professional branding and modern UI/UX"
      ],
      metrics: [
        { value: "100%", label: "Responsive" },
        { value: "A+", label: "Performance" }
      ]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with dynamic product catalog, shopping cart state management, and seamless checkout experience. Built with modern React patterns and comprehensive testing.",
      image: "/img/ecommerce.png",
      technologies: ["React", "React Router", "Context API", "Vitest", "CSS"],
      demoLink: "https://bdvdbvrcommerce.netlify.app",
      codeLink: "https://github.com/TheBenster/TOP-shopping-cart",
      highlights: [
        "Dynamic shopping cart with real-time updates",
        "Product filtering and search functionality",
        "Persistent cart state across sessions",
        "Comprehensive unit and integration tests with Vitest"
      ],
      metrics: [
        { value: "95%", label: "Test Coverage" },
        { value: "<2s", label: "Load Time" }
      ]
    },
    {
      id: 3,
      title: "Resume Builder Application",
      description:
        "Interactive resume builder with live preview, allowing users to create professional CVs with real-time editing and export functionality. Demonstrates advanced state management and component architecture.",
      image: "/img/ResumeBuilder.png",
      technologies: ["React", "State Management", "CSS", "Print Styling"],
      demoLink: "https://remarkable-biscuit-6b3130.netlify.app",
      codeLink: "https://github.com/TheBenster/TOP-CV",
      highlights: [
        "Live preview with instant updates as users type",
        "Multiple resume templates and customization options",
        "Export-ready PDF formatting with print CSS",
        "Modular component design for scalability"
      ],
      metrics: [
        { value: "Real-time", label: "Preview" },
        { value: "PDF", label: "Export Ready" }
      ]
    },
    {
      id: 4,
      title: "Coming Soon: Next Project",
      description:
        "Currently in development - An exciting new web application showcasing the latest technologies and best practices. Stay tuned for updates!",
      image: "/img/placeholder-project.svg",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      demoLink: null,
      codeLink: null,
      highlights: [
        "Modern tech stack with TypeScript for type safety",
        "Responsive design with TailwindCSS",
        "Full-stack integration with Node.js backend",
        "Coming soon - check back for updates!"
      ],
      metrics: [
        { value: "In Progress", label: "Status" }
      ]
    },
  ];

  return (
    <section className="websites-page">
      <div className="home websites">
        <h1 className="page-title">Website Projects</h1>
        <p className="page-description">
          Here are some of the web development projects I've worked on. Each
          project demonstrates different skills and technologies in my stack.
        </p>
        <div className="website-projects-container">
          {websiteProjects.map((project) => (
            <WebsiteProject
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              highlights={project.highlights}
              metrics={project.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesPage;
