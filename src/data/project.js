// Add, remove, or reorder project objects here to change the project cards.
// Each object needs a unique title, number, year, description, and tags array.
// number is the permanent project number. Reordering cards does not change it.
// The page sorts by number from highest to lowest (7 to 1).
// Import a local video below and use its variable as video. Use undefined for no video.
// poster is an optional image URL shown before a video plays.
// url adds a Visit website link. preview selects an optional custom card preview.
// src/data/project.js
import projectVideo1 from "../assets/CMPSC442-Project-3-Q1.mp4";
import projectVideo2 from "../assets/CMPSC442-Project-3-Q2.mp4";
import projectVideo3 from "../assets/CMPSC443-Project-3-Q1.mp4";

export const projectsData = [
  {
    title: "Wedding Photo Sharing",
    number: 7,
    year: 2026,
    description:
      "A wedding photo-sharing website that invites guests to upload their own photos of the celebration. The Malay-language page brings together candid moments, photos of the couple, and guests' outfits through a simple upload experience with a navy-and-gold design.",
    url: "https://www.fatinfazreen.pics/",
    preview: "wedding",
    tags: ["Web Development", "Client Project"],
  },
  {
    title: "JUAL : Web-based POS System",
    number: 4,
    year: 2026,
    description: `I developed a web-based Point of Sale (POS) system called JUAL using PHP, MySQL, HTML, CSS, and JavaScript.
    The system allows users to manage products, process sales transactions, and generate reports. It features a user-friendly interface and secure authentication.`,
    video: undefined,
    poster: undefined,
    tags: ["Class Project", "Web Development"],
  },
  {
    title: "GRADECHAIN: Blockchain-based GPA Tracking System",
    number: 5,
    year: 2026,
    description: `I developed a blockchain-based student grading system called GRADECHAIN using Solidity, Ethereum, and Web3.js.
    The system allows teachers to securely record and manage student grades on the blockchain, ensuring transparency and immutability. 
    It features a web interface for teachers and students to interact with the system.`,
    video: undefined,
    poster: undefined,
    tags: ["Class Project", "Web Development", "Blockchain"],
  },
  {
    title: "NittanyAI: PennState Auction Platform",
    number: 6,
    year: 2026,
    description: `I developed a web-based auction platform called NittanyAI using Python Flask, and MySQL.
    The platform allows users to list items for auction, place bids, and manage their auctions. It features a modern UI and real-time bidding functionality.`,
    video: undefined,
    poster: undefined,
    tags: ["Class Project", "Web Development"],
  },
  {
    title: "Blackjack Reinforcement Learning (Q-Learning)",
    number: 1,
    year: 2025,
    description: `I implemented a Q-learning agent in the Blackjack environment using Gymnasium. 
    The agent learns action values through repeated gameplays and uses an optimistic exploration strategy to balance exploration and exploitation, 
    and updates Q-values with temporal-difference learning. 
    Performance is evaluated by tracking the win rate over multiple episodes.`,
    video: projectVideo1,
    poster: undefined,
    tags: ["Class Project", "AI"],
  },
  {
    title: "FrozenLake Reinforcement Learning (Model-Based RL)",
    number: 2,
    year: 2025,
    description: `I built a reinforcement learning agent using OpenAI Gym's FrozenLake environment. I executed a random policy to collect experience,
     estimated the transition and reward models, and applied value iteration to compute the optimal value function. From this, I extracted an 
     optimal policy and evaluated it by running multiple episodes to measure the win rate.`,
    video: projectVideo2,
    poster: undefined,
    tags: ["Class Project", "AI"],
  },
  {
    title: "Tic-Tac-Toe AI with Minimax Algorithm",
    number: 3,
    year: 2025,
    description: `I developed a non-standard Tic-Tac-Toe game where getting three in a row does not immediately guarantee a win. If a player forms 
     three in a row but the opponent can create their own three in a row on the next move, the opponent wins instead. The game features a Minimax-based 
     AI with alpha-beta pruning, custom win-condition logic, and prebuilt Pygame interface.`,
    video: projectVideo3,
    poster: undefined,
    tags: ["Class Project", "AI"],
  },
];

export default projectsData;
