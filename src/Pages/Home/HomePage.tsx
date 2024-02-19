import React from "react";
import Home from "../../components/Home/Home";
import AboutBanner from "../../components/Banners/AboutBanner";
import ServicesIndex from "../../components/Services/ServicesIndex";
import ClientsBanner from "../../components/Banners/ClientsBanner";
import PortfolioIndex from "../../components/Portfolio/PortfolioIndex";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Home />
      <AboutBanner />
      <ServicesIndex />
      <ClientsBanner />
      <PortfolioIndex />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
