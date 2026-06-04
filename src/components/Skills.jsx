function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React.js",
    "PHP",
    "MySQL",
    "Java",
    "C++",
    "Git & Github",
  ];

  return (
    <section id="skills" data-aos="zoom-in">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <button className="skill-btn" key={index}>
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Skills;