import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const params = useParams();
  const url = process.env.REACT_APP_API_URL;
  const waitingTime = 2500;
  useEffect(() => {
    setTimeout(() => {
      window.location.href = `${url}/urls/open/${params.shortUrl}`;
    }, waitingTime);
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
