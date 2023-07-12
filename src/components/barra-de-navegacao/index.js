import styled from "styled-components";

import { Link } from "react-router-dom";
import { AlternadorTemas } from "../alternador-temas";

export const BarraDeNavegacao = () => {
  return (
    <Header>
      <Link to={"/"}>
        <Logo src="../img/logo.png" alt="Logo Pokemon" />
      </Link>
      <div>
        <CaixaDeTexto
          type="text"
          placeholder="Digite o tipo do pokemon"
          id="value"
          name="value"
        />
      </div>
      <ul>
        <Link to={"/contatos"}>
          <LiContato>Contato</LiContato>
        </Link>
      </ul>
      <AlternadorTemas />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 85px;
  background-color: #b21613;
`;

const Logo = styled.img`
  width: 70px;
`;

const CaixaDeTexto = styled.input`
  width: 500px;
  height: 38px;
  border: 2px solid #2b3050;
  border-radius: 50px;
  text-indent: 25px;

  &:focus {
    border-color: #f6ba16;
    outline: none;
  }
`;

const LiContato = styled.li`
  font-size: 1.7rem;
  font-weight: bold;
  border-bottom: 2px solid #2b3050;
  color: #fff;
  padding: 10px 20px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: #f6ba16;
    color: #2b3050;
    border-radius: 50px;
  }
`;
