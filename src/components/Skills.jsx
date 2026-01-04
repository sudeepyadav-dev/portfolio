function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2>Skills</h2>

        <p className="skills-text">
          I have hands-on experience in backend development using Java and
          Spring Boot. I focus on building scalable, secure, and
          well-structured backend systems.
        </p>

        <div className="skills-grid">

          <div className="skill-box">
            <h4>Backend</h4>
            <ul>
              <li>Java (Core & Advanced)</li>
              <li>Spring Boot</li>
              <li>REST API Development</li>
              <li>Microservices Architecture</li>
            </ul>
          </div>

          <div className="skill-box">
            <h4>Database</h4>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>JPA / Hibernate</li>
            </ul>
          </div>

          <div className="skill-box">
            <h4>Tools & Others</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>Maven</li>
              <li>Postman</li>
              <li>Basic Docker</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
