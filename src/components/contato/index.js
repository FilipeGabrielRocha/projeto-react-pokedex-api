import { Link } from "react-router-dom";
import styled from "styled-components";

import "./index.css";

export const Contato = () => {
  return (
    <Section>
      <Titulo>Formas de entrar em contato comigo:</Titulo>
      <Ul>
        <Li>📧 | filiperochaprogramador@gmail.com</Li>
        <Li>
          <LiSpan>in</LiSpan> |
          <Link
            to={"https://www.linkedin.com/in/filipe-gabriel-rocha/"}
            target="blank_"
          >
            <SiteLinkedIn>Ir para o Site</SiteLinkedIn>
          </Link>
        </Li>
      </Ul>
      <div>
        <Link to={"/"}>
          <BotaoVoltar>Voltar a página principal</BotaoVoltar>
        </Link>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #2b3050;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BotaoVoltar = styled.div`
  margin-top: 30px;
  padding: 15px 20px;
  background-color: #f6ba16;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  border-radius: 25px;

  &:hover {
    transform: scale(1.3);
  }
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: #f6ba16;
  margin-bottom: 30px;
`;

const Ul = styled.ul`
  font-size: 2.2rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: #000000 0px 50px 100px -100px, #000000 0px 30px 60px -100px,
    #000000 0px -2px 6px 0px inset;
`;

const Li = styled.li`
  padding: 15px;
  color: #fff;
`;

const LiSpan = styled.span`
  background-color: #0a66c2;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  margin-right: 3px;
  font-weight: bold;
`;

const SiteLinkedIn = styled.span`
  color: #fff;
  margin-left: 5px;
  transition: .3s ease-in-out;

  &:hover {
    border-bottom: 2px solid #f6ba16;
  }
`;
