import React from "react";
import { Link } from "react-router-dom";
import "../styles/portfolio-page.css";

const PortfolioItem = ({
  title,
  imageUrl,
  linkTo,
  altText,
  className = "",
}) => {
  return (
    <div className={`portfolio-item ${className}`}>
      {title}
      <Link to={linkTo}>
        <img className="port" src={imageUrl} alt={altText} />
      </Link>
    </div>
  );
};

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "Websites",
      imageUrl: "/img/test.png",
      linkTo: "/websites",
      altText: "Weather website preview",
    },
    {
      title: "Photography",
      imageUrl: "/img/temporality_fleeting.JPG",
      linkTo: "/photography",
      altText: "Photography sample",
    },
    {
      title: "Designs",
      imageUrl: "/img/designs.png",
      linkTo: "/designs",
      altText: "Design sample",
      className: "digital",
    },
  ];

  return (
    <section id="portfolio-page">
      <div className="portfolio">
        <div className="portfolio-header">Portfolio</div>
        <div className="portfolio-list">
          {portfolioItems.map((item, index) =>
            item.external ? (
              <div
                key={index}
                className={`portfolio-item ${item.className || ""}`}
              >
                {item.title}
                <a href={item.linkTo} target="_blank" rel="noopener noreferrer">
                  <img
                    className="port"
                    src={item.imageUrl}
                    alt={item.altText}
                  />
                </a>
              </div>
            ) : (
              <PortfolioItem
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                linkTo={item.linkTo}
                altText={item.altText}
                className={item.className}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
