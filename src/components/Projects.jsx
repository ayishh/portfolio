import { useRef } from 'react';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video is playing
          })
          .catch(err => {
            console.log('Video play error:', err);
            // Try loading first if not loaded
            if (video.readyState < 2) {
              video.load();
              video.oncanplay = () => {
                video.play().catch(e => console.log('Play after load error:', e));
              };
            }
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to beginning
    }
  };

  return (
    <div 
      key={index} 
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-video-container">
        <video
          ref={videoRef}
          className="project-video"
          src={project.video}
          preload="auto"
          muted
          loop
          playsInline
          poster={project.poster}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tags">
          <span className="project-tag project-tag-class">Class Project</span>
          <span className="project-tag project-tag-ai">AI</span>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

const Projects = ({ projects = [] }) => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
