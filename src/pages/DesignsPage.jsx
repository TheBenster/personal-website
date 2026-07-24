import React, { useState } from "react";
import "../styles/design-page.css";

const Icon = ({ name, className = "" }) => {
  const icons = {
    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
    external: (
      <>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    pen: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
      </>
    ),
    tools: (
      <>
        <path d="m14.7 6.3 3 3" />
        <path d="M3 21 14.7 9.3" />
        <path d="M15.5 3.5a4 4 0 0 0 5 5L8 21H3v-5L15.5 3.5Z" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={`design-icon ${className}`}
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
    >
      {icons[name]}
    </svg>
  );
};

const DesignProject = ({ design, onClick }) => {
  return (
    <button
      className="design-project"
      onClick={() => onClick(design)}
      type="button"
    >
      <img src={design.image} alt={design.title} className="design-image" />
      <div className="design-overlay">
        <span className="design-view-label">
          <Icon name="eye" />
          View Project
        </span>
        <h3 className="design-title">{design.title}</h3>
        <p className="design-category">{design.category}</p>
      </div>
    </button>
  );
};

const DesignModal = ({ design, onClose }) => {
  if (!design) return null;

  return (
    <div className="design-modal-backdrop" onClick={onClose}>
      <div
        className="design-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="design-modal-close"
          onClick={onClose}
          type="button"
          aria-label="Close design details"
        >
          <Icon name="close" />
        </button>
        <img
          src={design.image}
          alt={design.title}
          className="design-modal-image"
        />
        <div className="design-modal-info">
          <h2 className="design-modal-title">
            <Icon name="pen" />
            {design.title}
          </h2>
          <p className="design-modal-category">{design.category}</p>
          <p className="design-modal-description">{design.description}</p>
          {design.tools && (
            <div className="design-modal-tools">
              <h3>
                <Icon name="tools" />
                Tools Used
              </h3>
              <ul>
                {design.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          )}
          {design.link && (
            <a
              href={design.link}
              target="_blank"
              rel="noopener noreferrer"
              className="design-modal-link"
            >
              <span>View Full Project</span>
              <Icon name="external" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const DesignsPage = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Sample design projects - in a real app, you would fetch this from an API
  const designProjects = [
    {
      id: 1,
      title: "Logo concept for Detailing company",
      category: "Brand Design",
      description: "A concept piece for a Car Detailing company.",
      image: "/img/designs.png",
      tools: ["Adobe Illustrator", "Tailwind Colors", "Figma"],
      link: null,
    },
    {
      id: 2,
      title: "Soundcloud Rebrand Concept",
      category: "Brand Design",
      description:
        "A concept piece for the rebrand of Soundcloud, focusing on typography, color, and visual hierarchy.",
      image: "/img/soundcloud-rebrand.png",
      tools: ["Adobe Illustrator", "Figma", "Behance"],
      link: "https://www.behance.net/gallery/197747357/Soundcloud-Logo-Redesign",
    },
    {
      id: 3,
      title: "Farmers Market Poster Design",
      category: "Composite/Mockup",
      description:
        "Poster design developed for capstone project, including explanations for design decisions and mockups.",
      image: "/img/poster-design.png",
      tools: ["Adobe Illustrator", "Figma", "Sketch"],
      link: "https://www.behance.net/gallery/197757327/Farmers-Market-Design",
    },
  ];

  const openDesignModal = (design) => {
    setSelectedDesign(design);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeDesignModal = () => {
    setSelectedDesign(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
  };

  return (
    <section className="designs-page">
      <div className="home websites">
        <div className="design-page-header">
          <h1 className="design-page-title">Design Portfolio</h1>
          <p className="design-page-description">
            A focused collection of brand, layout, and presentation work.
          </p>
        </div>

        <p className="design-section-kicker">
          <Icon name="pen" />
          Selected projects
        </p>

        <div className="design-projects-grid">
          {designProjects.map((design) => (
            <DesignProject
              key={design.id}
              design={design}
              onClick={openDesignModal}
            />
          ))}
        </div>

        <DesignModal design={selectedDesign} onClose={closeDesignModal} />
      </div>
    </section>
  );
};

export default DesignsPage;
