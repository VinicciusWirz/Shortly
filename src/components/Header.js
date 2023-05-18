import { styled } from "styled-components";
import logo from "../assets/images/logo.svg";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <HeaderStyle>
      <Navbar />
      <Title>
        Shortly
        <img src={logo} alt="logo" />
      </Title>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
  margin-bottom: 71px;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 200;
  font-size: 64px;
  line-height: 80px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 102px;
  }
`;
