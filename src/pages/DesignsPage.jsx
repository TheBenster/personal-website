import React, { useState } from "react";
import "../styles/design-page.css";

const DesignProject = ({ design, onClick }) => {
  return (
    <div className="design-project" onClick={() => onClick(design)}>
      <img src={design.image} alt={design.title} className="design-image" />
      <div className="design-overlay">
        <h3 className="design-title">{design.title}</h3>
        <p className="design-category">{design.category}</p>
      </div>
    </div>
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
        <button className="design-modal-close" onClick={onClose}>
          ×
        </button>
        <img
          src={design.image}
          alt={design.title}
          className="design-modal-image"
        />
        <div className="design-modal-info">
          <h2 className="design-modal-title">{design.title}</h2>
          <p className="design-modal-category">{design.category}</p>
          <p className="design-modal-description">{design.description}</p>
          {design.tools && (
            <div className="design-modal-tools">
              <h3>Tools Used</h3>
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
              View Full Project
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
        "Poster design developed for capstone project, includes explainations for design decisions and mockups.",
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
        <h1 className="page-title">Design Portfolio</h1>
        <p className="page-description">
          A collection of my design work across various mediums and styles.
          Click on any project to view more details.
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
