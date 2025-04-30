import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">Portfolio</div>
      <div className="portfolio-list">
        <div className="portfolio-item">
          Websites
          <a href="websites.html">
            <img
              className="port"
              src="/img/AWCHome.png"
              alt="AWC Home Inspections"
            />
          </a>
        </div>

        <div className="portfolio-item">
          Videography
          <a href="https://gizziproductions.com/southern-lacrosse-showdown/">
            {/* <img
              className="port"
              src="./src/img/videography.png"
              alt="Videography sample"
            /> */}
          </a>
        </div>

        <div className="portfolio-item">
          Photography
          <a href="photography.html">
            {/* <img
              className="port"
              src="./src/img/fleeting.JPG"
              alt="Photography sample"
            /> */}
          </a>
        </div>

        <div className="portfolio-item digital">
          Designs
          <a href="designs.html">
            {/* <img
              className="port"
              src="./src/portfolio/liminality.jpg"
              alt="Design sample"
            /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
