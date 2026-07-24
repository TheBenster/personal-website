import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section id="about-page">
      <div className="about">
        <div className="about-content">
          <div className="top-half">
            <div className="headshot">
              <img
                className="headshot-img"
                src="/img/headshot.jpeg"
                alt="Ben Beaver - Web Developer and Designer"
              />
            </div>
            <div className="about-intro">
              <p className="intro-text">
                I'm a developer and data person near Asheville. I build web
                apps, write Python automation, and spend most of my time on the
                gap between technically functional and actually usable by the
                person who needs it. That gap is most of what the job turns out
                to be.
              </p>
              <p className="intro-text">
                The project I've put the most into: GlyphStack, a Japanese SRS
                app covering 1,841 kanji, 214 radicals, and vocabulary across
                212 frequency-ordered sets. I designed the session flow
                specifically to fix the things that frustrated me about every
                other SRS tool. It's the kind of thing that starts as a weekend
                project and becomes the thing you're still refining a year
                later.
              </p>
              <p className="intro-text">
                Other things about me: I play math rock and midwest emo guitar
                (about five years, mostly self-taught), make generative art in
                p5.js when I want to think about something that isn't a bug,
                study digital media at Davidson-Davie CC, collect Tomokazu
                Komiya Pokemon cards and rare San Pedro cultivars, and am
                currently reading East of Eden.
              </p>
            </div>
          </div>

          <div className="bottom-half">
            <h2>Stack</h2>

            <p className="intro-text">
              I build primarily with React and JavaScript in the browser, Python
              for automation and data pipelines, and FastAPI when I need a
              backend. CSS I write by hand: Tailwind when moving fast, Sass when
              structure matters. For design: Figma and Illustrator.
            </p>

            {/* Call to Action */}
            <div className="about-cta">
              <p>Want to work together?</p>
              <Link to="/portfolio" className="btn">
                View my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
