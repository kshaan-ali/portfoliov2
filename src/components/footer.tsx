import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
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