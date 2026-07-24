import { Link } from "react-router-dom";
import "../styles/project-page.css";

const GlyphStackPage = () => {
  const features = [
    {
      title: "Prerequisite gating",
      body: "Cards are locked behind other cards. You don't get quizzed on a kanji until you know its radicals. The system enforces learning order rather than leaving it to chance.",
    },
    {
      title: "Frequency-ordered vocabulary",
      body: "Vocabulary sets are built from corpus frequency data, not dictionary order. You learn the 212 sets of words you'll actually encounter first.",
    },
    {
      title: "Custom scheduling",
      body: "Not Anki's algorithm. The scheduler was designed specifically for kanji, where the relationship between characters matters as much as individual retention.",
    },
    {
      title: "Session flow from scratch",
      body: "No menus between cards, no decisions to make mid-session. Fast and uninterrupted. It's the way reviews should feel when you're trying to build a habit.",
    },
  ];

  const stack = ["React", "Vite", "Tailwind", "Supabase"];

  return (
    <section id="project-page">
      <div className="project-container">
        <Link to="/portfolio" className="back-link">
          ← Portfolio
        </Link>

        {/* Hero */}
        <div className="project-hero">
          <h1 className="project-title">GlyphStack</h1>
          <p className="project-tagline">
            A Japanese SRS app built to fix the things every other SRS tool got
            wrong.
          </p>
          <div className="project-stack">
            {stack.map((tech) => (
              <span key={tech} className="project-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Why */}
        <div className="project-section">
          <h2 className="project-section-title">Why I built it</h2>
          <div className="project-prose">
            <p>
              Every SRS tool I tried had the same problems. No concept of
              prerequisites, you'd get quizzed on a kanji before you'd learned
              any of its radicals. No frequency ordering, vocabulary pulled at
              random from the dictionary instead of from actual usage data. And
              a session flow that felt designed by committee rather than by
              someone who actually wanted to learn.
            </p>
            <p>
              GlyphStack was a weekend project that became the thing I'm still
              refining a year later. It started as frustration and turned into
              the most technically complex thing I've built.
            </p>
          </div>
        </div>

        {/* Coverage */}
        <div className="project-section">
          <h2 className="project-section-title">Coverage</h2>
          <div className="project-stats">
            <div className="project-stat">
              <span className="stat-number">1,841</span>
              <span className="stat-label">Kanji</span>
            </div>
            <div className="project-stat">
              <span className="stat-number">214</span>
              <span className="stat-label">Radicals</span>
            </div>
            <div className="project-stat">
              <span className="stat-number">212</span>
              <span className="stat-label">
                Frequency-ordered vocabulary sets
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="project-section">
          <h2 className="project-section-title">What makes it different</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="project-section">
          <h2 className="project-section-title">Status</h2>
          <div className="project-prose">
            <p>
              In active development. Can view here:{" "}
              <a
                href="https://glyphstack.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                glyphstack.app
              </a>
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="project-footer">
          <Link to="/portfolio" className="btn secondary">
            ← Back to Portfolio
          </Link>
          <Link to="/contact" className="btn primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlyphStackPage;
