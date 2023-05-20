import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { styled } from "styled-components";
import apiUrls from "../services/apiUrls";
import { useNavigate, useParams } from "react-router-dom";

export default function Redirect() {
  const params = useParams();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;
  const minTime = 1000;
  const maxTime = 2500;
  const rng = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  useEffect(() => {
    setTimeout(() => {
      window.location.href = `${url}/urls/open/${params.shortUrl}`;
    }, rng);
    // apiUrls
    //   .redirectShort(params.shortUrl)
    //   .then((res) => {
    //     const redirectUrl = res.request.response.replace(
    //       "OK. Redirecting to ",
    //       ""
    //     );
    //     window.location.href = redirectUrl;
    //   })
    //   .catch((error) => {
    //     alert("Ocorreu um erro");
    //     console.log(error);
    // });
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
