import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <div className="wrapper contact_wrapper">
      <div className="container contact_container">
        <div className="contact_form_container">form</div>
        <div className="contact_text_container">
          <h3>Entre em contato conosco.</h3>
          <h4>Solicite seu orçamento ou agende uma consultoria.</h4>
          <p>
            Envie-nos um email para o endereço{" "}
              
            <a href="mailto:suporte@guaratecnologia.com" className="contact_email_link" >
              {" "}
              suporte@guaratecnologia.com{" "}
            </a>{" "}
            ou entre em contato pelo Whatsapp{" "}
            <a
              href="https://web.whatsapp.com/send?phone=+559832368915"
              rel="noreferrer"
              target="_blank"
              className="contact_whatsapp_link"
            >
              +559832368915{" "}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
