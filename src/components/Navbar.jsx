import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  /* ===============================
     THEME STATE
     =============================== */
  const [theme, setTheme] = useState("light");

  /* ===============================
     DESKTOP CONTENT DROPDOWN
     =============================== */
  const [openContent, setOpenContent] = useState(false);

  /* ===============================
     MOBILE MENU STATE
     =============================== */
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="nav-wrapper">

      {/* ===============================
          LEFT LOGO (THEME ICON)
         =============================== */}
      <button
        className="theme-logo"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* ===============================
          DESKTOP NAVBAR
         =============================== */}
      <nav className="nav-pill desktop-nav">

        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/freelancing">Freelancing</NavLink>

        {/* DESKTOP CONTENT DROPDOWN */}
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
              <NavLink to="/youtube">YouTube</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      {/* ===============================
          RIGHT ACTIONS
         =============================== */}
      <div className="nav-actions">
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ===============================
          MOBILE MENU
         =============================== */}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/skills" onClick={() => setMobileOpen(false)}>Skills</NavLink>
          <NavLink to="/projects" onClick={() => setMobileOpen(false)}>Projects</NavLink>
          <NavLink to="/freelancing" onClick={() => setMobileOpen(false)}>Freelancing</NavLink>
          <NavLink to="/youtube" onClick={() => setMobileOpen(false)}>YouTube</NavLink>
          <NavLink to="/blog" onClick={() => setMobileOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
        </div>
      )}

    </header>
  );
}

export default Navbar;
