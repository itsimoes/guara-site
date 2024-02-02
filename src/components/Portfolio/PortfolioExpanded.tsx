import React from "react";
import "./style.scss";

import ThumbRestaurante from "../../assets/images/thumb_restaurante.png";
import ThumbBarros from "../../assets/images/thumb_barros.png";
import ThumbHiking from "../../assets/images/thumb_hiking.png";
import ThumbGorillaz from "../../assets/images/thumb_gorillaz.png";
import ThumbStudio from "../../assets/images/thumb_studio.png";
import ThumbIphone from "../../assets/images/thumb_iphone.png";
import ThumbVeterinaria from "../../assets/images/thumb_veterinaria.png";

const PortfolioExpanded = () => {
  return (
    <div id="portfolio" className="wrapper portfolio_wrapper">
      <div className="container portfolio_container">
        <div className="portfolio_expanded_title">
          <h2>
            <span>_</span>PORTFOLIO
          </h2>
          <div className="portfolio_subtitle_container">
            <h3>Veja nossos principais projetos</h3>
          </div>
        </div>
        <div className="portfolio_expanded_cards_container">
          <div className="portfolio_expanded_card">
            <img src={ThumbRestaurante} alt="" />
            <p>Restaurante</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">RESTAURANTE</h4>
              <div className="portfolio_expanded_span_text">
                Projeto de site de restaurante
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://itsimoes.github.io/restaurante-01"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card">
            <img src={ThumbBarros} alt="" />
            <p>Barros Consultoria</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">BARROS CONSULTORIA E CONCESSÕES</h4>
              <div className="portfolio_expanded_span_text">
                Site de empresa de consultoria
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://barrosconsultoriaeconcessoes.com"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card">
            <img src={ThumbHiking} alt="" />
            <p>Hiking</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">HIKING PORTAL</h4>
              <div className="portfolio_expanded_span_text">
                Projeto de portal sobre hiking
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://itsimoes.github.io/trekking-01/"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card">
            <img src={ThumbGorillaz} alt="" />
            <p>Gorillaz</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">GORILLAZ</h4>
              <div className="portfolio_expanded_span_text">
                Projeto de site sobre turnê da banda Gorrilaz
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://andreviniciussg.github.io/gorillaz/"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card">
            <img src={ThumbStudio} alt="" />
            <p>Studio</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">STUDIO</h4>
              <div className="portfolio_expanded_span_text">
                Projeto de site de estúdio musical
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://andreviniciussg.github.io/studio"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card">
            <img src={ThumbIphone} alt="" />
            <p>Iphone</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">IPHONE</h4>
              <div className="portfolio_expanded_span_text">
                Projeto de site de lançamento de IPhone
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://andreviniciussg.github.io/projeto_iphone15"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card">
            <img src={ThumbVeterinaria} alt="" />
            <p>Clínica Veterinária</p>
            <div className="portfolio_expanded_card_span">
              <h4 className="portfolio_expanded_span_title">VETERINARIA</h4>
              <div className="portfolio_expanded_span_text">
                Projeto de site de clínica veterinária
              </div>
              <a
                className="button home_button portfolio_expanded_card_button"
                href="https://itsimoes.github.io/clinica-veterinaria"
                rel="noreferrer"
                target="_blank"
              >
                ACESSAR
              </a>
            </div>
          </div>
          <div className="portfolio_expanded_card_soon">Em breve</div>
          <div className="portfolio_expanded_card_soon">Em breve</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioExpanded;
