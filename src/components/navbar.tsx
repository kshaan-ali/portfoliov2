import { useEffect, useState } from "react";

export const Navbar = () => {
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