import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>

      {/* HEALTHCARE APPOINTMENT BOOKING SYSTEM */}
      <div className="project-card">
        <h3>Healthcare Appointment Booking System</h3>

        <p className="project-desc">
          A microservices-based doctor appointment booking application built
          with Java and Spring Boot. It handles doctors, patients, booking,
          and payment services using REST APIs and Eureka service discovery.
        </p>

        <p className="project-tech">
          <strong>Tech Stack:</strong> Java, Spring Boot, Spring Cloud,
          Eureka, REST APIs
        </p>

        <ul className="project-features">
          <li>Doctor, Patient & Booking microservices</li>
          <li>Service registration & discovery with Eureka</li>
          <li>RESTful APIs for booking and management</li>
          <li>Modular microservices architecture</li>
        </ul>

        <a
          href="https://github.com/pankajmutha14/doctor-appointment-app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
