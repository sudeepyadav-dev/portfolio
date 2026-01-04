import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";  


import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Freelancing from "./components/Freelancing";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freelancing" element={<Freelancing />} />
         <Route path="/projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skills />} />

      </Routes>

      {/* Footer visible on all pages */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
