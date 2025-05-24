import { skills, socialLinks } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Rakhi
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I’m a fresher passionate about coding and building things through
          constant learning. I often dig into deep-dive tutorials and enjoy
          experimenting to understand how software really works. Every project I
          try is a step forward in sharpening my skills
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Connect with me</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {socialLinks.map((socialLinks) => (
            <a
              href={socialLinks.link}
              rel="noopener noreferrer"
              className="block-container w-20"
            >
              <div className="block-container w-20 h-20" key={socialLinks.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={socialLinks.iconUrl}
                    alt={socialLinks.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
