import { SkillsInfo } from "../../constant";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
 
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#4593ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#0b081e]/60 backdrop-blur-xl px-4 sm:px-8 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-3xl border border-white/10 
          shadow-[0_0_30px_-5px_rgba(69,147,236,0.25)] hover:border-blue-500/25 transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center tracking-wide">
            {category.title}
          </h3>

          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-white/5 border border-white/5 hover:border-[#4593ec]/40 rounded-xl p-2 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-300 leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;