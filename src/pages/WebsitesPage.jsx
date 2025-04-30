import React from "react";
import "../styles/websites-page.css";

const WebsiteProject = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="website-project">
      <div className="website-project-image">
        <img src={image} alt={title} />
      </div>
      <div className="website-project-content">
        <h2 className="website-project-title">{title}</h2>
        <p className="website-project-description">{description}</p>
        <div className="website-project-technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="website-project-links">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="website-project-demo-link"
            >
              Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="website-project-code-link"
            >
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
        "A responsive website for AWC Home Inspections, using React, CSS, and JavaScript. It features a clean and modern design, with a focus on attentional hierarchy and ease of navigation.",
      image: "/img/awrightchoice.png",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Netlify"],
      demoLink: "https://awchomeinspections.com/",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-featured online store with product listings, cart functionality, user authentication, and payment processing.",
      image: "/img/ecommerce.png",
      technologies: ["React", "React Router", "Vitest", "Netlify"],
      demoLink: "https://bdvdbvrcommerce.netlify.app",
      codeLink: "https://github.com/TheBenster/TOP-shopping-cart",
    },
    {
      id: 3,
      title: "Resume Builder",
      description:
        "A CSV/Resume builder app to demonstrate interactivity, state management, and data persistence.",
      image: "/img/ResumeBuilder.png",
      technologies: ["React", "CSS", "State Management"],
      demoLink: "https://remarkable-biscuit-6b3130.netlify.app",
      codeLink: "https://github.com/TheBenster/TOP-CV",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesPage;
