import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <NavStyle>
      <Options>
        <div onClick={() => navigate("/signin")}>Entrar</div>
        <div onClick={() => navigate("/signup")}>Cadastrar-se</div>
      </Options>
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
    color: #5d9040;
  }
  div {
    cursor: pointer;
  }
`;
