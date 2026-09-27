// Card layout and video behavior. Edit the project content in src/data/project.js.
import { useRef } from "react";
import "./Projects.css";
import { projectsData } from "../data/project.js";
const ProjectCard = ({ project, index }) => {
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
        ) : (
          // Short names and the diamond below depend on the data array order. Update them if reordered.
          <div className="project-placeholder" aria-hidden="true">
            <span>
              {["", "", "", "JUAL", "GRADECHAIN", "NittanyAI"][index] ||
                project.title.split(":")[0]}
            </span>
            <span className="placeholder-symbol">
              {index === 4 ? "\u25c7" : "</>"}
            </span>
            <span>Designed & developed</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
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
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </section>
);
export default Projects;
