import React from "react";
import "./style.scss";

//icons
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaScrewdriver } from "react-icons/fa";
import { BsQuestionDiamond } from "react-icons/bs";

const SuporteDeTI = () => {
  return (
    <div className="wrapper services_wrapper">
      <div className="container support_container">
        <div className="support_title">
          <h2>
            <span>_</span>SUPORTE DE TI
          </h2>
          <h3>Serviços de suporte, instalação e manutenção.</h3>
        </div>
        <div className="support_text_container">
          <h4>
            <span>_</span>O que podemos oferecer?
          </h4>
          <p>
            Oferecemos serviços de tecnologia que visam prevenir e solucionar
            problemas em computadores, notebooks, software e hardware. Tornando
            eficaz o gerenciamento de informações e a segurança dos dados
            coletados e armazenados.
          </p>
        </div>
        <div className="support_subsection_icon_card">
          <HiMiniWrenchScrewdriver className="support_subsection_icon" />
          <h3>Serviços oferecidos</h3>
        </div>
        <div className="support_subsection_text_cards_container">
          <div className="support_subsection_text_card support_subsection_text_card_white">
            <p>
              • Inventário contínuo de hardware e softwares da rede.
              <br />
              • Instalação de periféricos (impressoras, monitores, scanners,
              leitores etc.)
              <br />
              • Instalação e configuração de softwares.
              <br />
              • Instalação e configuração de hardwares em rede(switch, roteador,
              access point etc.)
              <br />• Implantação de rede de computadores em LAN.
            </p>
          </div>
          <div className="support_subsection_text_card support_subsection_text_card_orange">
            <p>
              • Monitoramento dos mecanismos de segurança dos equipamentos
              (Antivírus, firewall).
              <br />
              • Monitoramento de espaço em disco livre, hardwares, dentre
              outros.
              <br />
              • Backup em discos e nuvem.
              <br />• Reparos de hardware, como troca de fontes, memória, SSD e
              HD (peças não inclusas).
            </p>
          </div>
          <div className="support_subsection_text_card support_subsection_text_card_white">
            <p>
              • Manutenção preventiva.
              <br />
              • Formatação de computadores.
              <br />
              • Gerenciamento de processos de TI.
              <br />• Atendimento presencial e remoto.
            </p>
          </div>
          <div className="site_institucional_divider_container">
            <div className="site_institucional_divider" />
            <FaScrewdriver className="site_institucional_divider_icon" />
            <div className="site_institucional_divider" />
          </div>
        </div>
        <div className="support_subsection_icon_card">
          <BsQuestionDiamond className="support_subsection_icon" />
          <h3>Por que contratar o suporte de TI?</h3>
        </div>
        <div className="support_subsection_text_cards_container">
          <div className="support_subsection_text_card support_subsection_text_card_white">
            <p>
              • Redução de custos operacionais: essa é uma grande vantagem.
              Contratando uma empresa especializada permite reduzir custos e
              tempo dependendo da demanda de serviço.
            </p>
          </div>
          <div className="support_subsection_text_card support_subsection_text_card_orange">
            <p>
              • Profissionais qualificados: um profissional será capaz de
              realmente entender as demandas da sua empresa, e, principalmente,
              traçar um plano de ação objetivo e eficaz.
            </p>
          </div>
          <div className="support_subsection_text_card support_subsection_text_card_white">
            <p>
              • Atendimento rápido: o profissional de TI irá utilizar o seu
              conhecimento e experiência para diagnosticar as causas do problema
              com mais precisão, dando mais agilidade à resolução dos problemas.
            </p>
          </div>
          <div className="support_subsection_text_card support_subsection_text_card_orange">
            <p>
              • Prevenção de novas ocorrências: após atender e solucionar um
              chamado é preciso entender as origens da instabilidade. Nesse
              caso, o suporte especializado poderá não só encontrar a causa do
              problema, mas também sugerir ações para evitar novas ocorrências.
            </p>
          </div>
          <div className="support_subsection_text_card support_subsection_text_card_white">
            <p>
              • Atendimento exclusivo: atendimento é personalizado de acordo com
              as necessidades e objetivos de cada cliente. Com isso, a resolução
              da questão se torna mais eficiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuporteDeTI;
