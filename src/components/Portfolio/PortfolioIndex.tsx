import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import "./style.scss";

const PortfolioIndex = () => {
  return (
    <div className="wrapper portfolio_wrapper">
      <div className="container portfolio_container">
        <div className="portfolio_title">
          <h2>
            <span>_</span>PORTFOLIO
          </h2>
          <div className="portfolio_subtitle_container">
            <a href=" " className="button banner_button portfolio_button">
              VEJA MAIS PROJETOS
            </a>
            <h3>Projetos em Destaque</h3>
          </div>
        </div>
        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default PortfolioIndex;
