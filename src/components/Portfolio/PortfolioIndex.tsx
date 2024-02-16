import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import "./style.scss";

//images
import AtendimentoCard1 from "../../assets/images/atendimento_thumb_1.png";
import AtendimentoCard2 from "../../assets/images/atendimento_thumb_2.png";
import AtendimentoCard3 from "../../assets/images/atendimento_thumb_3.png";
import AtendimentoCard4 from "../../assets/images/atendimento_thumb_4.png";

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
            <h3 className="portfolio_subtitle_orange">Projetos em Destaque</h3>
          </div>
        </div>
        <PortfolioCarousel />
        <a href=" " id="portfolio_projects_button_mobile" className="button banner_button portfolio_button">
          VEJA MAIS PROJETOS
        </a>
        <div className="portfolio_subtitle_container">
          <h3>Atendimentos em Destaque</h3>
          <a href=" " className="button banner_button portfolio_button_reverse">
            VEJA MAIS ATENDIMENTOS
          </a>
        </div>
        <div className="portfolio_atendimento_cards_container">
          <img
            src={AtendimentoCard1}
            alt=""
            className="portfolio_atendimento_card"
          />
          <img
            src={AtendimentoCard2}
            alt=""
            className="portfolio_atendimento_card"
          />
          <img
            src={AtendimentoCard3}
            alt=""
            className="portfolio_atendimento_card"
          />
          <img
            src={AtendimentoCard4}
            alt=""
            className="portfolio_atendimento_card"
          />
        </div>
        <a href=" " id="portfolio_button_atendimento_mobile" className="button banner_button portfolio_button_reverse">
            VEJA MAIS ATENDIMENTOS
          </a>
      </div>
    </div>
  );
};

export default PortfolioIndex;
