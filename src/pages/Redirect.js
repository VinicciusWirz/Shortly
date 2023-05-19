import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { styled } from "styled-components";
import apiUrls from "../services/apiUrls";
import { useNavigate, useParams } from "react-router-dom";

export default function Redirect() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiUrls
      .redirectShort(params.shortUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error);
        navigate("/");
      });
  }, []);
  return (
    <Container>
      Você está sendo redirecionado <ThreeDots />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
