import './App.css'
import PillNav from './components/PillNav';
import DarkModeToggle from './components/DarkModeToggle';
// import ChromaGrid from './components/ChromaGrid';
import { SkillsSection } from './Section/Skills';
import Projects from './Section/Projects';
import Intro from './Section/Intro';
const logo = './public/logo (2).png';;

function App() {
  return (
    <div className="App">
      <div className="nav-container">
      </div>

      <div className="Introduction-section">
        {/* <div className="intro-text">
          <h1 className="intro-title">Hi, I'm Muhammad</h1>
          <p className="intro-subtitle">A passionate software developer and AI enthusiast.</p>
        </div> */}
        <Intro/>
      </div>

      <div className="projects-section">
        <Projects />
      </div>

      <div className="skills-section">
        <h2 className="skills-title">Programming Languages & Frameworks</h2>
        <SkillsSection />
      </div>

      
    </div>
  )
}

export default App

