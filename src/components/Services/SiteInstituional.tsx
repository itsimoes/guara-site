import React from "react";
import "./style.scss";

//icons
import { MdMobileFriendly } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import { PiNumberCircleOneLight } from "react-icons/pi";
import { PiNumberCircleTwoLight } from "react-icons/pi";
import { PiNumberCircleThreeLight } from "react-icons/pi";


const SiteInstituional = () => {
  return (
    <div className="wrapper services_wrapper">
      <div className="container site_institucional_container">
        <div className="site_institucional_title">
          <h2>
            <span>_</span>SITE INSTITUCIONAL
          </h2>
          <h3>Traga sua empresa para o mundo virtual.</h3>
        </div>
        <div className="site_institucional_text_container">
          <h4>
            <span>_</span>O que podemos oferecer?
          </h4>
          <p>
            Com expertise sólida em desenvolvimento web, nossa equipe é
            apaixonada por transformar ideias em websites incríveis. Utilizamos
            as mais recentes tecnologias e práticas de design responsivo para
            garantir uma experiência única aos usuários. Desde a concepção até a
            implementação, estamos comprometidos em criar soluções web
            intuitivas, atraentes e funcionais que elevam a presença online de
            nossos clientes. Conte conosco para dar vida à sua visão digital com
            inovação e excelência em desenvolvimento de websites.
          </p>
          <div className="site_institucional_card_container">
            <div className="site_institucional_card">
              <MdMobileFriendly className="site_institucional_card_icon_type_1" />
              <h5>Responsividade</h5>
              <p>SITES OTIMIZADOS PARA TODAS AS PLATAFORMAS</p>
            </div>
            <div className="site_institucional_card">
              <MdMobileFriendly className="site_institucional_card_icon_type_1" />
              <h5>Funcionalidade</h5>
              <p>APLICAÇÕES WEB QUE FACILITAM SEU DIA A DIA</p>
            </div>
            <div className="site_institucional_card">
              <MdMobileFriendly className="site_institucional_card_icon_type_1" />
              <h5>SEO</h5>
              <p>TÉCNICAS DE OTIMIZAÇÃO PARA RANQUEAMENTO</p>
            </div>
          </div>
          <div className="site_institucional_divider_container">
            <div className="site_institucional_divider" />
            <LuFileCode className="site_institucional_divider_icon" />
            <div className="site_institucional_divider" />
          </div>
          <h4>
            <span>_</span>Como funciona?
          </h4>
          <div className="site_institucional_card_container">
            <div className="site_institucional_card">
              <PiNumberCircleOneLight className="site_institucional_card_icon_type_2" />
              <p className="site_institucional_card_2_text">
                Ajudamos você a adquirir um domínio e escolher o melhor plano de
                hospedagem para seu site e todos os recursos necessários.
              </p>
            </div>
            <div className="site_institucional_card">
              <PiNumberCircleTwoLight className="site_institucional_card_icon_type_2" />
              <p className="site_institucional_card_2_text">
                Caso não tenha um projeto pronto, ajudamos a desenvolver sua
                ideia e escolher as melhores opções de funcionalidades para seu
                site.
              </p>
            </div>
            <div className="site_institucional_card">
              <PiNumberCircleThreeLight className="site_institucional_card_icon_type_2" />
              <p className="site_institucional_card_2_text">
                Desenvolvemos seu projeto com as melhores soluções em tecnologia
                disponíveis atualmente no mercado de forma ágil e objetiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteInstituional;
