// src/data/project.js
import projectVideo1 from '../assets/CMPSC442-Project-3-Q1.mp4';
import projectVideo2 from '../assets/CMPSC442-Project-3-Q2.mp4';
import projectVideo3 from '../assets/CMPSC443-Project-3-Q1.mp4';

export const projectsData = [
  {
    title: "Blackjack Reinforcement Learning (Q-Learning)",
    description: `I implemented a Q-learning agent in the Blackjack environment using Gymnasium. 
    The agent learns action values through repeated gameplays and uses an optimistic exploration strategy to balance exploration and exploitation, 
    and updates Q-values with temporal-difference learning. 
    Performance is evaluated by tracking the win rate over multiple episodes.`,
    video: projectVideo1,
    poster: undefined,
    tags: ['Class Project', 'AI']
  },
  {
    title: "FrozenLake Reinforcement Learning (Model-Based RL)",
    description: `I built a reinforcement learning agent using OpenAI Gym's FrozenLake environment. I executed a random policy to collect experience,
     estimated the transition and reward models, and applied value iteration to compute the optimal value function. From this, I extracted an 
     optimal policy and evaluated it by running multiple episodes to measure the win rate.`,
    video: projectVideo2,
    poster: undefined,
    tags: ['Class Project', 'AI']
  },
  {
    title: "Tic-Tac-Toe AI with Minimax Algorithm",
    description: `I developed a non-standard Tic-Tac-Toe game where getting three in a row does not immediately guarantee a win. If a player forms 
     three in a row but the opponent can create their own three in a row on the next move, the opponent wins instead. The game features a Minimax-based 
     AI with alpha-beta pruning, custom win-condition logic, and prebuilt Pygame interface.`,
    video: projectVideo3,
    poster: undefined,
    tags: ['Class Project', 'AI']
  },
  {
    title: "JUAL : Web-based POS System",
    description: `I developed a web-based Point of Sale (POS) system called JUAL using PHP, MySQL, HTML, CSS, and JavaScript.
    The system allows users to manage products, process sales transactions, and generate reports. It features a user-friendly interface and secure authentication.`,
    video: undefined,
    poster: undefined,   
    tags: ['Class Project', 'Web Development']
  },
  {
    title: "GRADECHAIN: Blockchain-based GPA Tracking System",  
    description: `I developed a blockchain-based student grading system called GRADECHAIN using Solidity, Ethereum, and Web3.js.
    The system allows teachers to securely record and manage student grades on the blockchain, ensuring transparency and immutability. 
    It features a web interface for teachers and students to interact with the system.`,
    video: undefined,
    poster: undefined,
    tags: ['Class Project', 'Web Development', 'Blockchain']
  },
  {
    title: "NittanyAI: PennState Auction Platform",
    description: `I developed a web-based auction platform called NittanyAI using Python Flask, and MySQL.
    The platform allows users to list items for auction, place bids, and manage their auctions. It features a modern UI and real-time bidding functionality.`,
    video: undefined,
    poster: undefined,
    tags: ['Class Project', 'Web Development']
  }
];

export default projectsData;