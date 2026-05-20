import { Link } from "react-router-dom";
import { projects, sqlProjects, webProjects } from "../constants";
import { arrow } from "../assets/icons";

const ProjectCard = ({ project }) => (
  <div className="lg:w-[400px] w-full">
    <div className="block-container w-12 h-12">
      <div className={`btn-back rounded-xl ${project.theme}`} />
      <div className="btn-front rounded-xl flex justify-center items-center">
        <img
          src={project.iconUrl}
          alt={project.name}
          className="w-1/2 h-1/2 object-contain"
        />
      </div>
    </div>
    <div className="mt-5 flex flex-col">
      <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
      <p className="mt-2 text-slate-500">{project.description}</p>
      <div className="mt-5 flex items-center gap-2 font-poppins">
        <Link
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600"
        >
          View Project
        </Link>
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
         I'm a fresher passionate about coding and building things through
  constant learning. I often dig into deep-dive tutorials and enjoy
  experimenting to understand how software really works. Every project I
  try is a step forward in sharpening my skills
      </p>

      {/* Python & Data Analysis */}
      <div className="mt-12">
        <h3 className="subhead-text">Python & Data Analysis</h3>
        <div className="flex flex-wrap my-8 gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* SQL Projects */}
      <div className="mt-12">
        <h3 className="subhead-text">SQL Projects</h3>
        <div className="flex flex-wrap my-8 gap-16">
          {sqlProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* Web Development */}
      <div className="mt-12">
        <h3 className="subhead-text">Web Development</h3>
        <div className="flex flex-wrap my-8 gap-16">
          {webProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
    </section>
  );
};

export default Projects;