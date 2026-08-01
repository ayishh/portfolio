import './App.css'
import PillNav from './components/PillNav';
import DarkModeToggle from './components/DarkModeToggle';
// import ChromaGrid from './components/ChromaGrid';
import { SkillsSection } from './Section/Skills';
import Projects from './Section/Projects';
// import projectVideo1 from './assets/CMPSC442-Project-3-Q1.mp4';
// import projectVideo2 from './assets/CMPSC442-Project-3-Q2.mp4';
// import projectVideo3 from './assets/CMPSC443-Project-3-Q1.mp4';
// import languages from './data/skill.js';

const logo = './public/logo (2).png';;

// const projectsData = [
//   {
//     title: "Blackjack Reinforcement Learning (Q-Learning)",
//     description: `I implemented a Q-learning agent in the Blackjack environment using Gymnasium. 
//     The agent learns action values through repeated gameplays and uses an optimistic exploration strategy to balance exploration and exploitation, 
//     and updates Q-values with temporal-difference learning. 
//     Performance is evaluated by tracking the win rate over multiple episodes.`,
//     video: projectVideo1,
//     poster: undefined
//   },
//   {
//     title: "FrozenLake Reinforcement Learning (Model-Based RL)",
//     description: `I built a reinforcement learning agent using OpenAI Gym's FrozenLake environment. I executed a random policy to collect experience,
//      estimated the transition and reward models, and applied value iteration to compute the optimal value function. From this, I extracted an 
//      optimal policy and evaluated it by running multiple episodes to measure the win rate.`,
//     video: projectVideo2,
//     poster: undefined
//   },
//   {
//     title: "Tic-Tac-Toe AI with Minimax Algorithm",
//     description: `I developed a non-standard Tic-Tac-Toe game where getting three in a row does not immediately guarantee a win. If a player forms 
//     three in a row but the opponent can create their own three in a row on the next move, the opponent wins instead. The game features a Minimax-based 
//     AI with alpha-beta pruning, custom win-condition logic, and prebuilt Pygame interface.`,
//     video: projectVideo3,
//     poster: undefined
//   }
// ];

function App() {
  return (
    <div className="App">
      <div className="nav-container">
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

