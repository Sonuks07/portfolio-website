import Quiz from "../assets/Quiz.png";
import Ecommerce from "../assets/ecommerce.png";
import HR from "../assets/HR.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, and admin dashboard.",
      image: Ecommerce,
      github: "",
      live: "",
    },

    {
      title: "QuizEngine",
      description:
        "React.js based quiz application with score tracking and dynamic question handling.",
      image: Quiz,
      github: "https://github.com/Sonuks07/QuizEngine-For-Coders",
      live: "",
    },

    {
      title: "AI Resume Screening & HR Tracking",
      description:
        "AI-powered recruitment system for resume analysis, candidate tracking, and HR workflow automation.",
      image: HR,
      github: "",
      live: "",
    },
  ];

  return (
    <section id="projects" data-aos="fade-left">
      <h2 className="project-heading">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" data-aos="zoom-in-up" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;