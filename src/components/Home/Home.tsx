import React from "react";
import "./style.scss";

import HomeLogo from "../../assets/images/logo_main_color.png"

const Home = () => {
  return (
    <div className="wrapper home_wrapper">
      <div className="container home_container">
        <div className="home_card_container">
          {/* <div className="home_watermark">
            www.
          </div> */}
          <img src={HomeLogo} className="home_logo" alt="" />
          <h1>
            - <br/>
            DESENVOLVIMENTO WEB & <br/>
            SUPORTE DE TI
          </h1>
          <a href=" " className="button home_button">SERVIÇOS</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
