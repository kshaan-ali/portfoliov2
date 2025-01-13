import { data } from "../data/data";

export const Skills = () => (
    <div id="skills" className="bg-gray-800 text-white py-20 px-6">
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
        Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="px-7 py-3 text-xl rounded shadow hover:shadow-md transform hover:scale-105 transition-transform bg-gradient-to-r from-blue-500 to-blue-700 select-none"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );