import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p>
          <FaEnvelope /> 
          <a href="mailto:sonuksingh73248@gmail.com">
            Email
          </a>
        </p>

        <p>
          <FaPhone /> +91 9304900641
        </p>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Sonuks07"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sonu-kumar-singh-01012128b/?skipRedirect=true"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;