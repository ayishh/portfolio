// Skill section headings and groups. Edit the actual skills in src/data/skill.js.
// The number ranges below are typed by hand; update them when adding or removing skills.
import ChromaGrid from "../components/ChromaGrid.jsx";
import { languages, frameworks } from "../data/skill.js";
import "./Skills.css";
export const SkillsSection = () => (
  <section
    className="skills-section section-shell"
    id="skills"
    aria-labelledby="skills-heading"
  >
    <div className="section-heading">
      <div>
        <p className="eyebrow">02 / The toolkit</p>
        <h2 id="skills-heading">The tools behind the work.</h2>
      </div>
      <p>
        A versatile foundation for building, experimenting, and solving
        interesting problems.
      </p>
    </div>
    <div className="skill-group">
      <h3>
        Languages <span>01&ndash;09</span>
      </h3>
      <ChromaGrid items={languages} />
    </div>
    <div className="skill-group">
      <h3>
        Frameworks & libraries <span>01&ndash;06</span>
      </h3>
      <ChromaGrid items={frameworks} />
    </div>
  </section>
);
export default SkillsSection;
