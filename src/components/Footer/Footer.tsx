import React from "react";
import "./style.scss";

import { ReactComponent as LogoMonocrom } from "../../assets/images/logo_main_monocrom.svg";

//icons
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="wrapper footer_wrapper">
      <div className="container footer_container">
        <div className="footer_suggestions_card">
          <h4>Dúvidas e sugestões?</h4>
          <p>
            Entre em contato através de nosso email de suporte, mídias sociais
            ou através do nosso{" "}
            <a
              href="https://web.whatsapp.com/send?phone=+559832368915"
              rel="noreferrer"
              target="_blank"
              className="footer_whatsapp_link"
            >
              Whatsapp
            </a>
            .
          </p>
          <span>
            Homepage image by{" "}
            <a
              className="footer_freepink_link"
              href="https://www.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_6740634.htm#page=2&query=workstation&position=2&from_view=search&track=ais&uuid=c5640b70-d52a-4a71-a686-ab509c81d5f6"
              rel="noreferrer"
              target="_blank"
            >
              Freepik
            </a>
            .
          </span>
        </div>
        <LogoMonocrom className="footer_logo" />
        <div className="footer_socialmedia_card">
          <h4>Siga-nos nas redes sociais!</h4>
          <div className="footer_socialmedia_icons_container">
            <a className="button" href="">
              <SlSocialInstagram className="footer_socialmedia_icon" />
            </a>
            <a className="button" href="">
              <SlSocialLinkedin className="footer_socialmedia_icon" />
            </a>
            <a className="button" href="">
              <SlSocialYoutube className="footer_socialmedia_icon" />
            </a>
          </div>
          <span>
            2024 - Guará Soluções em Tecnologia - Todos os direitos reservados.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
