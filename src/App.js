import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Services,
  Projects,
  Blogs,
  Contact,
  DigitalMarketing,
  CreativeProduction,
  Consulting,
  Navbar,
  Footer,
  Sidebar,
} from "./Components/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/creative-production"
          element={<CreativeProduction />}
        />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
