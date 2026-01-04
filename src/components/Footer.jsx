import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT – INFO + PAGES */}
        <div className="footer-col">
          <h4>Sudeep Yadav</h4>
          <p>Java Backend Developer | Spring Boot</p>

          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>

        {/* RIGHT – SOCIAL */}
        <div className="footer-col">
          <a
            href="https://www.instagram.com/sudeep__yadav?igsh=bm1memp1NTlweHk4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/sudeep-yadav-77bb401a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/sudeepyadav-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sudeep Yadav. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
