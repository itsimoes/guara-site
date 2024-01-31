import React from "react";
import "./style.scss";

import { ReactComponent as BorderDetailRight } from "../../assets/images/border_detail_right.svg";
import { ReactComponent as CarvalhoEng } from "../../assets/images/carvalho_engenharia.svg";
import { ReactComponent as BarrosConsultoria } from "../../assets/images/barros_consultoria.svg";
import { ReactComponent as NormaSilva } from "../../assets/images/norma_silva_adv.svg";
import { ReactComponent as MayaraSerra } from "../../assets/images/mayara_serra.svg";

const ClientsBanner = () => {
  return (
    <div className="wrapper clients_wrapper">
      <div className="container banner_container clients_container">
        <h2 className="clients_banner_title">
          <span>_</span>NOSSOS CLIENTES
        </h2>
        <div className="clients_cards_container">
          <CarvalhoEng />
          <BarrosConsultoria />
          <NormaSilva />
          <MayaraSerra />
        </div>
        <BorderDetailRight className="clients_border_detail" />
      </div>
    </div>
  );
};

export default ClientsBanner;
