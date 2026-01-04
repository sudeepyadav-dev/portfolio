function Freelancing() {
  return (
    <section id="freelancing" className="freelancing">
      <div className="freelancing-container">

        <h2>Freelancing</h2>

        <p className="freelancing-text">
          I offer backend development services using Java and Spring Boot.
          I specialize in building secure REST APIs, fixing backend issues,
          and developing scalable server-side applications.
        </p>

        <p className="freelancing-text">
          Available for freelance work, short-term tasks, and long-term
          collaborations.
        </p>

        <div className="freelancing-services">
          <ul>
            <li>Java Spring Boot Backend Development</li>
            <li>REST API Development & Integration</li>
            <li>Bug Fixing & Code Optimization</li>
            <li>Database Design (MySQL / PostgreSQL)</li>
          </ul>
        </div>

        <a href="/contact" className="btn-primary">
          Hire Me
        </a>

      </div>
    </section>
  );
}

export default Freelancing;
