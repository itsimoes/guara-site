import React from "react";
import "./style.scss";

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
          <BorderDetailLeft />
        </div>
        <LogoMonocrom className="banner_logo" />
        <a href=" " className="button banner_button">
          SOBRE A GUARÁ
        </a>
      </div>
    </div>
  );
};

export default AboutBanner;
