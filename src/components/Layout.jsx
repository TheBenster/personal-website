import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Layout = () => {
  return (
    <div id="root">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <Socials />
      </footer>
    </div>
  );
};

export default Layout;
