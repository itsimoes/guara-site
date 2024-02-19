import React from "react";
import "./style.scss";
import { Link as ReactLink } from "react-router-dom";

//icons
import { GoGlobe } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";

const ServicesIndex = () => {
  return (
    <div id="services" className="wrapper services_wrapper">
      <div className="container services_container">
        <div className="services_title">
            <h2><span>_</span>SERVIÇOS</h2>
            <h3>Serviços que prestamos</h3>
        </div>
        <div className="services_cards_container">
            <div className="services_card">
                <GoGlobe className="services_card_icon"/>
                <h4>SITE INSTITUCIONAL</h4>
                <p>Sites responsivos, otimizados e personalizados.</p>
                <ReactLink to="/siteinstitucional" 
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                  });
                }}
                className="button home_button">SAIBA MAIS</ReactLink>
            </div>
            <div className="services_card">
                <GoTools className="services_card_icon"/>
                <h4>SUPORTE DE TI</h4>
                <p>Instalação e manutenção de computadores e periféricos.</p>
                <ReactLink to="/suporte" 
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                  });
                }}
                className="button home_button">SAIBA MAIS</ReactLink>
            </div>
            <div className="services_card">
                <GoLightBulb className="services_card_icon"/>
                <h4>CONSULTORIA</h4>
                <p>Serviço de consultoria 100% personalizado.</p>
                <ReactLink to="/consultoria"  
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                  });
                }}
                className="button home_button">SAIBA MAIS</ReactLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIndex;
