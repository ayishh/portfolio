// Card layout and video behavior. Edit the project content in src/data/project.js.
import { useRef } from "react";
import "./Projects.css";
import { projectsData } from "../data/project.js";
const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  // Start a muted preview when the card is hovered or reached with the keyboard.
  const playPreview = () => {
    videoRef.current?.play()?.catch(() => {
      // Playback can be interrupted when the pointer leaves during loading.
    });
  };

  // Leaving the card stops the video and returns it to the beginning.
  const resetPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <article
      className="project-card surface"
      onMouseEnter={playPreview}
      onMouseLeave={resetPreview}
      onFocus={playPreview}
      onBlur={resetPreview}
      tabIndex={project.video ? 0 : undefined}
    >
      {/* Videos loop without controls. Add controls to the video tag to show player buttons. */}
      {/* muted allows hover playback; playsInline keeps playback inside the card on phones. */}
      <div className="project-media">
        {project.video ? (
          <video
            ref={videoRef}
            className="project-video"
            src={project.video}
            preload="metadata"
            muted
            playsInline
            loop
            poster={project.poster}
            aria-label={project.title + " demonstration"}
          >
            Your browser does not support video playback.
          </video>
        ) : project.preview === "wedding" ? (
          // A small visual preview based on the wedding site's landing page.
          <div className="project-wedding-preview" aria-hidden="true">
            <div className="wedding-preview-panel">
              <span className="wedding-preview-names">Fatin &amp; Fazreen</span>
              <span className="wedding-preview-title">Dari Lensa Tetamu</span>
              <span className="wedding-preview-divider">&#10022;</span>
              <span className="wedding-preview-copy">
                Kenangan indah, dari perspektif anda.
              </span>
              <span className="wedding-preview-upload">Upload</span>
            </div>
          </div>
        ) : (
          // Use project content so the preview stays correct when cards are sorted.
          <div className="project-placeholder" aria-hidden="true">
            <span>{project.title.split(":")[0].trim()}</span>
            <span className="placeholder-symbol">
              {project.tags.includes("Blockchain") ? "\u25c7" : "</>"}
            </span>
            <span>Designed & developed</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>PROJECT {String(project.number).padStart(2, "0")}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p>{project.description}</p>
        {/* Add url to a project in the data file to show its live website link. */}
        {project.url && (
          <a
            className="soft-button project-site-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} (opens in a new tab)`}
          >
            Visit website <span aria-hidden="true">&#8599;</span>
          </a>
        )}
      </div>
    </article>
  );
};
// Change the section heading below. Cards are created from the projects array.
const Projects = ({ projects = projectsData }) => (
  <section
    className="projects-section section-shell"
    id="projects"
    aria-labelledby="projects-heading"
  >
    <div className="section-heading">
      <div>
        <p className="eyebrow">01 / Selected work</p>
        <h2 id="projects-heading">Ideas, brought to life.</h2>
      </div>
      <p>
        A collection of experiments and applications across the web, AI, and
        beyond.
      </p>
    </div>
    <div className="projects-grid">
      {/* Show project numbers from highest to lowest, regardless of data array order. */}
      {[...projects]
        .sort((a, b) => b.number - a.number)
        .map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
    </div>
  </section>
);
export default Projects;
