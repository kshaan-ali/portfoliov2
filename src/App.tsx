// PortfolioWebsite.js
import React, { useEffect, useState } from "react";
import "./App.css"; // Import Tailwind CSS
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const data = {
  projects: [
    {
      title: "Chess On Chain",
      description:
        "Chess on Chain is a next-gen platform merging the classic game of chess with blockchain technology. Play chess for free with friends or global players while exploring the unique NFT ecosystem.",
      liveLink: "https://chess-on-chain-byali.vercel.app/",
      githubLink: "https://github.com/kshaan-ali/ChessOnChain",
    },
    {
      title: "Ethana",
      description:
        "Multi BlockChain Solana, Ethereum, Polygon Token, Nft LaunchPad and swap Dapp.",
      liveLink: "https://ethana-shaan.vercel.app/",
      githubLink: "https://github.com/kshaan-ali/EthAna",
    },
    {
      title: "Meta Tasker",
      description:
        'MetaTASKER" is a web application designed to streamline task management within teams. Built using Next.js framework with Prisma ORM for PostgreSQL database interactions, it facilitates efficient task tracking and collaboration among team members. The backend is implemented in TypeScript, providing type safety and scalability',
      liveLink: null,
      githubLink: "https://github.com/kshaan-ali/MetaTasker",
    },
    {
      title: "Decentralised Voting App",
      description:
        "The Decentralized Voting App is a blockchain-based solution designed to enable secure, transparent, and tamper-proof voting. Built as a decentralized application (dApp), it leverages smart contracts to record votes on the blockchain, ensuring immutable and auditable election results.",
      liveLink: "https://web3-voting-dapp-beta.vercel.app/",
      githubLink: "https://github.com/kshaan-ali/web3-voting-dapp",
    },
    {
      title: "Solana web3 Dapp",
      description: "",
      liveLink: null,
      githubLink: "https://github.com/kshaan-ali/Solana-Dapp",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "typescript",
    "websoket",
    "solidity",
    "rust",
    "tailwindCss",
    "PostgreSQL",
    "Prisma Orm",
    "MongoDB",
  ],
  experiences: [
    {
      title: "BlockChain Dev. intern",
      duration: "July,2024 - Dec,2024",
      description:
        "Building and deploying Smart Contract and Dapp on Polygon BlockChain.",
      company: "Jmedia Corporation, Texas",
    },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-gray-900 bg-opacity-90 shadow-lg border-b border-gray-700"
          : "bg-transparent"
      } sticky top-0 z-10 text-white py-6 px-6 flex justify-between items-center transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-3xl font-bold">MyPortfolio</h1>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <button className="text-white">☰</button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex space-x-6 absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent md:w-auto md:items-center`}
      >
        <li>
          <a href="#projects" className="hover:text-indigo-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-indigo-500">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-indigo-500">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Hero = () => (
  <div className="bg-gradient-to-r min-h-96 flex flex-col items-center justify-center from-gray-800 to-gray-900 text-white ">
    <h1 className="text-4xl md:text-6xl font-extrabold">
      Hi, I'm Shaan Ali Khan
    </h1>
    <p className="mt-10 text-xl w-3/5">
      I specialize in building intuitive web applications and decentralized
      solutions using technologies like React, JavaScript, Node.js, Solidity,
      and blockchain. Explore my projects to see how I combine innovation with
      cutting-edge technologies!
    </p>
  </div>
);

const Projects = () => (
  <div id="projects" className="bg-gray-900 text-white py-20 px-6">
    <h2 className="text-5xl font-bold mb-16">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.projects.map((project, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform hover:shadow-xl flex flex-col justify-between`}
        >
          <div>
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 text-white">{project.description}</p>
          </div>
          <div className="mt-4 flex space-x-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="bg-gray-800 px-4 py-2 rounded-md text-white font-bold hover:bg-gray-700"
              >
                Live Link
              </a>
            )}
            <a
              href={project.githubLink}
              className="bg-gray-800 px-4 py-2 rounded-md text-white font-bold hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div id="skills" className="bg-gray-800 text-white py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {data.skills.map((skill, index) => (
        <span
          key={index}
          className={`px-7 py-3 text-xl  rounded shadow hover:shadow-md transform hover:scale-105 transition-transform  bg-gradient-to-r from-blue-500 to-blue-700 select-none`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <div id="experience" className="bg-gray-900 text-white py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform select-none"
        >
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="my-2  font-bold">{exp.company}</p>
          <p className="my-2">Duration: {exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div
    id="contact"
    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-20 px-6"
  >
    <h2 className="text-3xl font-bold mb-8">Contact</h2>
    <div className="flex flex-col justify-center items-center">

    <p className="text-lg mb-4">Feel free to reach out to me via email!</p>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=kshaaneali@gmail.com&su=Inquiry&body=Hello%20Shaan,%0A%0A"
      className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-md text-white font-bold hover:from-indigo-400 hover:to-purple-400"
      >
      Send Email
    </a>
      </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 text-center">
    <div className="flex justify-center space-x-6 mb-4">
      <a
        href="https://www.instagram.com/kshaaneali/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-500"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://github.com/kshaan-ali"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-500"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/kshaaneali/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-500"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
    <p>&copy; 2025 Shaan Ali Khan. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="font-sans bg-gray-900">
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default App;
