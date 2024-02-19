import React from "react";
import "./style.scss";
import { Link } from "react-scroll";

import HomeLogo from "../../assets/images/logo_main_color.png"

const Home = () => {
  return (
    <div id="home" className="wrapper home_wrapper">
      <div className="container home_container">
        <div className="home_card_container">        
          <img src={HomeLogo} className="home_logo" alt="" />
          <h1>
            - <br/>
            DESENVOLVIMENTO WEB & <br/>
            SUPORTE DE TI
          </h1>
          <Link to="services" smooth className="button home_button">SERVIÇOS</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
