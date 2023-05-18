import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import SessionContext from "../contexts/SessionContext";

export default function Navbar() {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <NavStyle>
      {token ? (
        <>
          <Options>
            <div onClick={() => navigate("/")}>Home</div>
            <div onClick={() => navigate("/ranking")}>Ranking</div>
            <div onClick={logout}>Sair</div>
          </Options>
          <Title color="#5d9040">Seja bem-vindo(a) {token.name}!</Title>
        </>
      ) : (
        <Options color="#5d9040">
          <div onClick={() => navigate("/signin")}>Entrar</div>
          <div onClick={() => navigate("/signup")}>Cadastrar-se</div>
        </Options>
      )}
    </NavStyle>
  );
}
const NavStyle = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-top: 60px;
`;
const Options = styled.div`
  display: flex;
  gap: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #9c9c9c;
  :first-child {
    color: ${(props) => (props.color ? props.color : "#9c9c9c")};
    /* color: #5d9040; */
  }
  div {
    cursor: pointer;
  }
`;
const Title = styled.div`
  color: #5d9040;
`;
