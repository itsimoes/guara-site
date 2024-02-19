import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SiteInstitucionalPage from "./Pages/SiteInstitucional/SiteInsitucionalPage";
import PortfolioExpanded from "./components/Portfolio/PortfolioExpanded";
import AboutPage from "./Pages/About/AboutPage";
import HomePage from "./Pages/Home/HomePage";
import Suporte from "./Pages/Suporte/Suporte";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/siteinstitucional" element={<SiteInstitucionalPage />} />
          <Route path="/suporte" element={<Suporte/>} />
          <Route path="/portfolio" element={<PortfolioExpanded />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
