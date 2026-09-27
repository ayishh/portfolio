// Edit your name, introduction, button labels, and interests here.
// Replace src/assets/profile.jpg or change the image import below for a new portrait.
import "./Intro.css";
import profileImg from "../assets/profile.jpg";
export const Intro = () => (
  <section
    className="intro-container section-shell"
    id="about"
    aria-labelledby="intro-heading"
  >
    <div className="intro-text-content">
      <p className="eyebrow">
        <span className="intro-dot" /> A little curiosity. A lot of care.
      </p>
      <h1 id="intro-heading">
        Hello, I'm
        <br />
        <span>Fariez Daniel.</span>
      </h1>
      <p className="intro-lead">Turning ideas into things you can use.</p>
      <p className="intro-description">
        I'm a web developer who enjoys building beautiful, functional
        experiences. From front-end interfaces to explorations in AI, I bring a
        thoughtful approach to every line of code.
      </p>
      {/* Change href to choose the section each button opens. Entities below draw arrows. */}
      <div className="intro-actions">
        <a href="#projects" className="soft-button soft-button-primary">
          View my projects <span aria-hidden="true">&#8599;</span>
        </a>
        <a href="#skills" className="soft-button">
          My toolkit <span aria-hidden="true">&#8595;</span>
        </a>
      </div>
      <div className="intro-disciplines">
        <span>Web development</span>
        <span>Artificial intelligence</span>
        <span>Creative problem solving</span>
      </div>
    </div>
    {/* These nested wrappers create the raised outer ring and recessed portrait frame. */}
    <div className="intro-visual">
      <div className="portrait-orbit">
        <div className="portrait-well">
          <img
            src={profileImg}
            alt="Fariez Daniel"
            width="1961"
            height="1961"
            className="profile-image"
          />
        </div>
      </div>
      <div className="portrait-note surface">
        <span className="code-well" aria-hidden="true">
          &lt;/&gt;
        </span>
        <div>
          <strong>Made with intention.</strong>
          <p>Design meets development.</p>
        </div>
      </div>
      <span className="intro-decoration" aria-hidden="true">
        &#10035;
      </span>
    </div>
  </section>
);
export default Intro;
