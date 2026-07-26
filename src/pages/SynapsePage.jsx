import { Link } from "react-router-dom";
import "../styles/project-page.css";

const SynapsePage = () => {
  const features = [
    {
      title: "Dependency gating",
      body: "When you import a word, any kanji inside it with a lower frequency stage automatically becomes a dependency. The vocab card stays locked until you've learned its components.",
    },
    {
      title: "Corpus-based staging",
      body: "Every kanji is categorized into one of five stages based on real-world frequency across news, literature, and Wikipedia—ensuring rare kanji gate you at the right time.",
    },
    {
      title: "Telemetry-Driven SRS (TD-SRS)",
      body: "No manual self-grading buttons. Synapse uses your response latency as a continuous signal. Answer fast, the ease factor goes up. Answer slow, it goes down.",
    },
    {
      title: "Vacation mode",
      body: "If you step away for more than 7 days, your overdue items are automatically spread across your re-entry instead of burying you in a massive, demotivating review pile.",
    },
  ];

  const stack = ["Python", "FastAPI", "SQLite", "Vanilla JS", "PWA"];

  return (
    <section id="project-page">
      <div className="project-container">
        <Link to="/portfolio" className="back-link">
          ← Portfolio
        </Link>

        {/* Hero */}
        <div className="project-hero">
          <h1 className="project-title">Synapse</h1>
          <p className="project-tagline">
            An algorithmic curriculum engine that sits between the rigidity of
            WaniKani and the chaos of Anki.
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
              Most Japanese learning tools force you into two extremes. You
              either follow a strict, pre-defined path, or you use a completely
              unstructured flashcard app where you have to curate everything
              manually.
            </p>
            <p>
              Synapse acts as a bridge: you bring your own vocabulary deck, but
              the engine automatically structures it. It gates cards behind
              prerequisite kanji based on corpus frequency data, meaning you
              can't study a complex medical term until you actually know the
              kanji used to write it. It provides a local-first feel in the
              browser, powered by a modern backend.
            </p>
          </div>
        </div>

        {/* Coverage */}
        <div className="project-section">
          <h2 className="project-section-title">Architecture & Scale</h2>
          <div className="project-stats">
            <div className="project-stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Corpus Frequency Stages</span>
            </div>
            <div className="project-stat">
              <span className="stat-number">9</span>
              <span className="stat-label">Telemetry-Driven SRS Intervals</span>
            </div>
            <div className="project-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Local-first UUID identity</span>
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
              In active development. Designed as a Progressive Web App (PWA)
              installable directly from the browser, with a robust
              SQLite/FastAPI backend driving the logic.
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

export default SynapsePage;
