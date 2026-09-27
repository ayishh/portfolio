// Main page: edit the header links, section order, and footer here.
// Section text lives in src/Section; project and skill lists live in src/data.
import { useState } from "react";
import "./App.css";
import { SkillsSection } from "./Section/Skills";
import Projects from "./Section/Projects";
import Intro from "./Section/Intro";

function App() {
  // false hides the mobile links. The menu button switches this value.
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App" id="top">
      <a href="#main" className="skip-link soft-button">
        Skip to content
      </a>
      {/* Edit the brand and navigation here. Each #link must match a section id. */}
      <header className="site-header surface">
        <a href="#top" className="brand" aria-label="Fariez Daniel, home">
          <span className="brand-mark">fd.</span>
          <span>
            Fariez Daniel
            <span className="brand-subtitle">Developer & curious thinker</span>
          </span>
        </a>
        <button
          className="menu-toggle soft-button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? "\u2715" : "\u2630"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              document.querySelector(".menu-toggle")?.focus();
            }
          }}
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a
            className="soft-button"
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Explore my work <span aria-hidden="true">&#8599;</span>
          </a>
        </nav>
      </header>
      {/* Move these components to change the section order. Keep main for the skip link. */}
      <main id="main" tabIndex={-1}>
        <Intro />
        <Projects />
        <SkillsSection />
      </main>
      <footer className="site-footer section-shell">
        <div>
          <strong className="font-display">Fariez Daniel</strong>
          <p>Thoughtful interfaces. Purposeful code.</p>
        </div>
        <a className="soft-button" href="#top">
          Back to top <span aria-hidden="true">&#8593;</span>
        </a>
      </footer>
    </div>
  );
}
export default App;
