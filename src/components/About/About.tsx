import React from "react";
import "./style.scss";

const About = () => {
  return (
    <div className="wrapper about_wrapper">
      <div className="container about_container">
        <h2 className="about_title">
          <span>_</span>QUEM É A GUARÁ?
        </h2>
        <div className="about_text_container">
          <p>
            Fundada em 2024, a Guará - Soluções em Tecnologia é uma empresa que
            nasceu da junção de ideais, valores e competências de seus sócios.
            Com o intuito de realizar projetos que satisfaçam nossos clientes
            para que possam criar a identidade e trazer para o mundo virtual
            suas empresas.
          </p>
          <p>
            Somos um time de profissionais capacitados nas áreas de Suporte de
            TI e Desenvolvimento Web que atende às principais demandas atuais no
            que diz respeito à virtualização de sua empresa, pequeno negócio ou
            projeto pessoal.
          </p>
          <p>
            Com vasto conhecimento nos setores que atendemos, podemos
            proporcionar às melhores soluções em relação à praticidade,
            agilidade, funcionalidade e estética para seu negócio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
