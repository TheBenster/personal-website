import React, { useState } from "react";
import "../styles/data-analysis.css";

const DataProject = ({ project, onClick }) => {
  return (
    <div className="data-project" onClick={() => onClick(project)}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <span className="view-details">View Details</span>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-brief">{project.brief}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <span className="modal-category">{project.category}</span>
        </div>

        <div className="modal-body">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />

          <div className="modal-details">
            <div className="project-description">
              <h3>Project Overview</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-challenges">
              <h3>Key Challenges</h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="project-solutions">
              <h3>Solutions & Impact</h3>
              <ul>
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div className="project-metrics">
                <h3>Key Metrics</h3>
                <div className="metrics-grid">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DataAnalysisPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Updated Data Analysis Projects - Safe Approach

  const dataProjects = [
    {
      id: 1,
      title: "Hurricane Helene Disaster Analytics",
      category: "Disaster Analytics",
      brief:
        "Professional data analysis supporting disaster recovery coordination efforts.",
      image: "/img/data-visualizations.png", // Generic data viz image
      description:
        "Led analytical efforts for Hurricane Helene disaster recovery operations at Tetratech. Developed data processing pipelines and analytical frameworks to support emergency response coordination and recovery planning. Due to the sensitive nature of disaster recovery data, specific visualizations and datasets cannot be shared publicly.",
      challenges: [
        "Processing large volumes of time-sensitive disaster data",
        "Integrating multiple data sources with varying formats",
        "Creating analysis frameworks for rapid decision-making",
        "Ensuring data accuracy under high-pressure conditions",
      ],
      solutions: [
        "Implemented automated data validation and cleaning processes",
        "Developed standardized analytical workflows for consistent results",
        "Created efficient data integration pipelines",
        "Established quality control measures for time-critical analysis",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "PostgreSQL",
        "Docker",
        "Git",
      ],
      metrics: [
        { value: "Professional", label: "Work Experience" },
        { value: "Tetratech", label: "Company" },
        { value: "Ongoing", label: "Project Status" },
        { value: "Confidential", label: "Data Classification" },
      ],
      note: "This project involves sensitive disaster recovery data. Specific visualizations and datasets cannot be shared due to confidentiality requirements.",
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="data-analysis-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Data Analysis</h1>
          <p className="page-subtitle">
            Professional data analysis projects from my role as Data Analyst at
            Tetratech
          </p>
          <p className="page-description">
            Specializing in disaster recovery analytics, infrastructure
            assessment, and business intelligence solutions that drive informed
            decision-making during critical emergency response operations.
          </p>
        </div>

        {/* Professional Context */}
        <div className="professional-context">
          <div className="context-card">
            <h3>Current Role</h3>
            <p>
              <strong>Data Analyst at Tetratech</strong>
              <br />
              Leading analytical efforts for Hurricane Helene disaster recovery,
              processing complex datasets to support emergency response and
              infrastructure rebuilding initiatives.
            </p>
          </div>
          <div className="context-card">
            <h3>Impact Focus</h3>
            <p>
              <strong>Mission-Critical Analytics</strong>
              <br />
              Developing data solutions that directly support communities
              affected by natural disasters, enabling faster response times and
              more effective resource allocation.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {dataProjects.map((project) => (
              <DataProject
                key={project.id}
                project={project}
                onClick={openProjectModal}
              />
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="skills-tools-section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Programming & Analysis</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">SciPy</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">Jupyter</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Visualization & BI</h3>
              <div className="skill-tags">
                <span className="skill-tag">Plotly</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Seaborn</span>
                <span className="skill-tag">Dash</span>
                <span className="skill-tag">Tableau</span>
                <span className="skill-tag">Power BI</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Data & Infrastructure</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">GIS</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Specialized Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">QGIS</span>
                <span className="skill-tag">GeoPandas</span>
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">Apache Airflow</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="methodology-section">
          <h2 className="section-title">Analytical Approach</h2>
          <div className="methodology-grid">
            <div className="methodology-step">
              <div className="step-number">01</div>
              <h3>Data Discovery</h3>
              <p>
                Identify and assess available data sources, ensuring quality and
                completeness for reliable analysis.
              </p>
            </div>
            <div className="methodology-step">
              <div className="step-number">02</div>
              <h3>Processing & Cleaning</h3>
              <p>
                Implement robust ETL pipelines to transform raw data into
                analysis-ready datasets.
              </p>
            </div>
            <div className="methodology-step">
              <div className="step-number">03</div>
              <h3>Analysis & Modeling</h3>
              <p>
                Apply statistical methods and machine learning techniques to
                extract actionable insights.
              </p>
            </div>
            <div className="methodology-step">
              <div className="step-number">04</div>
              <h3>Visualization & Communication</h3>
              <p>
                Create compelling visualizations and dashboards that communicate
                findings to stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="data-cta">
          <h2>Need Data Analysis Solutions?</h2>
          <p>
            Whether you're dealing with disaster recovery, infrastructure
            planning, or business intelligence challenges, I can help turn your
            data into actionable insights.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn primary">
              Discuss Your Project
            </a>
            <a href="/portfolio" className="btn secondary">
              View All Work
            </a>
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      </div>
    </section>
  );
};

export default DataAnalysisPage;
