import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import "./style.scss";
import { Link as ReactLink } from "react-router-dom";

//images
import ProjetosThumbBarros from "../../assets/images/thumb_barros.png";
import ProjetosThumbGorillaz from "../../assets/images/thumb_gorillaz.png";
import ProjetosThumbHiking from "../../assets/images/thumb_hiking.png";
import ProjetosThumbVeterinaria from "../../assets/images/thumb_veterinaria.png";
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
            <ReactLink
              to="/portfolio"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                });
              }}
              className="button banner_button portfolio_button"
            >
              VEJA MAIS PROJETOS
            </ReactLink>
            <h3 className="portfolio_subtitle_orange">Projetos em Destaque</h3>
          </div>
        </div>
        <PortfolioCarousel />
        <div className="portfolio_projects_mobile_container">
          <div className="portfolio_projects_mobile_card">
            <a
              href="https://barrosconsultoriaeconcessoes.com"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ProjetosThumbBarros} alt="" />
            </a>
          </div>
          <div className="portfolio_projects_mobile_card">
            <a
              href="https://andreviniciussg.github.io/gorillaz/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ProjetosThumbGorillaz} alt="" />
            </a>
          </div>
          <div className="portfolio_projects_mobile_card">
            <a
              href="https://itsimoes.github.io/trekking-01/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ProjetosThumbHiking} alt="" />
            </a>
          </div>
          <div className="portfolio_projects_mobile_card">
            <a
              href="https://itsimoes.github.io/clinica-veterinaria"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ProjetosThumbVeterinaria} alt="" />
            </a>
          </div>
        </div>
        <ReactLink
          to="/portfolio"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
            });
          }}
          id="portfolio_projects_button_mobile"
          className="button banner_button portfolio_button"
        >
          VEJA MAIS PROJETOS
        </ReactLink>
        <div className="portfolio_subtitle_container">
          <h3>Atendimentos em Destaque</h3>
          <ReactLink
            to="/galeria"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
              });
            }}
            className="button banner_button portfolio_button_reverse"
          >
            VEJA MAIS ATENDIMENTOS
          </ReactLink>
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
        <ReactLink
          to="/galeria"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
            });
          }}
          id="portfolio_button_atendimento_mobile"
          className="button banner_button portfolio_button_reverse"
        >
          VEJA MAIS ATENDIMENTOS
        </ReactLink>
      </div>
    </div>
  );
};

export default PortfolioIndex;
