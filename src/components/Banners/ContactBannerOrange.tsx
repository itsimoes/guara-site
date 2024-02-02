import React from "react";
import "./style.scss";

import { ReactComponent as BorderDetailRight } from "../../assets/images/border_detail_right.svg";

const ContactBannerOrange = () => {
  return (
    <div className="wrapper clients_wrapper contact_banner_orange_wrapper">
      <div className="container banner_container clients_container">
        <h2 className="contact_banner_orange_title">
          <span>_</span>ENTRE EM CONTATO
        </h2>
        <div className="contact_banner_text_container">
          <h3>Quer solicitar um orçamento?</h3>
          <a className="button banner_button contact contact_banner_button_white" href="">FALE CONOSCO</a>
        </div>
        <BorderDetailRight className="contact_border_white_detail" />
      </div>
    </div>
  );
};

export default ContactBannerOrange;
