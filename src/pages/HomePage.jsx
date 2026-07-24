import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="home">
        <div className="title-btn">
          <h1 className="title">
            Web developer near Asheville.
          </h1>
          <h1 className="position">
            I build web apps and automation tools, some for clients and some
            because I got frustrated with what was available and decided to fix
            it.
          </h1>
          <Link to="/portfolio" className="link-to">
            <button className="btn">view my work</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
