import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-link">
          <button className="btn not-found-btn">Return Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
