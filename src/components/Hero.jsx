import profile from "../assets/sonu.jpeg";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Hi, I'm Sonu Kumar</h1>

          <h2>Web Developer</h2>

          <p>
             Welcome to my coding journey! 🚀 I'm passionate about building
             modern web applications, solving real-world problems, and continuously
             learning new technologies to create impactful digital experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/1uJ2BFwSuwI4QJnKdt2x8-4oZpW_glcG4/view?usp=drive_link"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Sonu Kumar" />
        </div>

      </div>
    </section>
  );
}

export default Hero;