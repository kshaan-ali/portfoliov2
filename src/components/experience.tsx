import { data } from "../data/data";

export const Experience = () => (
    <div id="experience" className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform select-none"
            data-aos="fade-up"
            data-aos-delay={index * 300}
          >
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <p className="my-2 font-bold">{exp.company}</p>
            <p className="my-2">Duration: {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );