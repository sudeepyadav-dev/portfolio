// React Router hook to navigate between pages
import { useNavigate } from "react-router-dom";

function Hero() {
  // navigate() helps us change pages without reloading
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Optional overlay for background effect */}
      <div className="hero-overlay"></div>

      <div className="hero-left">
        {/* Name */}
        <h1>Sudeep Yadav</h1>

        {/* Short role description */}
        <p className="hero-sub">
          Java Backend Developer building scalable systems
        </p>

        {/* Tech summary */}
        <p className="hero-desc">
          I work with Java, Spring Boot, REST APIs and Microservices.
        </p>

        {/* ACTION BUTTONS */}
        <div className="hero-actions">
          
          {/* 
            Hire Me button
            👉 Opens CONTACT PAGE
            👉 Page change using React Router
          */}
          <button
            className="btn-primary"
            onClick={() => navigate("/contact")}
          >
            Hire Me
          </button>

          {/*
            View Projects button
            👉 Opens PROJECTS PAGE
            👉 No scroll, no #id
          */}
          <button
            className="btn-outline"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
