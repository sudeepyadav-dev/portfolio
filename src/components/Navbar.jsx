import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  /* ===============================
     THEME STATE (light / dark)
     =============================== */
  const [theme, setTheme] = useState("dark");

  /* ===============================
     DROPDOWN STATE
     =============================== */
  const [openContent, setOpenContent] = useState(false);

  /* ===============================
     APPLY THEME ON <html>
     =============================== */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="nav-wrapper">

      {/* ===============================
          NAV LINKS
         =============================== */}
      <nav className="nav-pill">

        {/* MAIN LINKS */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/freelancing">Freelancing</NavLink>

        {/* ===============================
            CONTENT DROPDOWN
           =============================== */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => setOpenContent(true)}
          onMouseLeave={() => setOpenContent(false)}
        >
          <span className="nav-link">
            Content <span className="arrow">▾</span>
          </span>

          {openContent && (
            <div className="dropdown-menu">
              <NavLink to="/youtube" onClick={() => setOpenContent(false)}>
                YouTube
              </NavLink>
              <NavLink to="/blog" onClick={() => setOpenContent(false)}>
                Blog
              </NavLink>
            </div>
          )}
        </div>

        {/* OTHER LINKS */}
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>

      </nav>

      {/* ===============================
          RIGHT ACTIONS
         =============================== */}
      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

    </header>
  );
}

export default Navbar;
