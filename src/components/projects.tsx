import { data } from "../data/data";

export const Projects = () => (
    <div id="projects" className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-5xl font-bold mb-16" data-aos="fade-up">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform hover:shadow-xl flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay={index * 300}
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