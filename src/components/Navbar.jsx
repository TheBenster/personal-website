import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="about-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav home-nav active" : "nav home-nav"
        }
      >
        home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav about-nav active" : "nav about-nav"
        }
      >
        about
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? "nav portfolio-nav active" : "nav portfolio-nav"
        }
      >
        portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav contact-nav active" : "nav contact-nav"
        }
      >
        contact
      </NavLink>
    </div>
  );
};

export default Navbar;
