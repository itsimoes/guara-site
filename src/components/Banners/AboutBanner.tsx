import React from "react";
import "./style.scss";
import { Link as ReactLink } from "react-router-dom";

import { ReactComponent as BorderDetailLeft } from "../../assets/images/border_detail_left.svg";
import { ReactComponent as LogoMonocrom } from "../../assets/images/logo_main_monocrom.svg";

const AboutBanner = () => {
  return (
    <div className="wrapper about_banner_wrapper">
      <div className="container banner_container">
        <div className="banner_left_container">
          <h2 className="about_banner_title">
            <span>_</span>QUEM SOMOS?
          </h2>
          <ReactLink to="/about" 
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
            });
          }}
          id="about_button_mobile" className="button banner_button">
            SOBRE A GUARÁ
          </ReactLink>
          <BorderDetailLeft />
        </div>
        <LogoMonocrom className="banner_logo" />
        <ReactLink to="/about" 
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
          });
        }}
        id="about_button_desktop" className="button banner_button">
          SOBRE A GUARÁ
        </ReactLink>
      </div>
    </div>
  );
};

export default AboutBanner;
