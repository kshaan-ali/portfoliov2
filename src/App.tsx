import  { useEffect } from "react";
import "./App.css"; // Import Tailwind CSS

import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS CSS
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skill";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
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
};

export default App;
