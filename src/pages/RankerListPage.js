import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiUrls from "../services/apiUrls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RankerLinks from "../components/RankerLinks";

export default function RankerListPage() {
  const [loading, setLoading] = useState(true);
  const [shorts, setShorts] = useState([]);
  const [name, setName] = useState("User");
  const params = useParams();

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    setLoading(true);
    try {
      const info = await apiUrls.getRankUrlsList(params.id);
      setName(info.data.name);
      setShorts(info.data.shortenedUrls);
      setLoading(false);
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
      setLoading(false);
    }
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    toast("Link copiado");
  }

  return (
    <LinksRenderStyle>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <Title>Links de {name}</Title>
        <LinkList>
          {shorts.map((l) => (
            <RankerLinks
              key={l.shortUrl}
              item={l}
              copyToClipboard={copyToClipboard}
              loading={loading}
              setLoading={setLoading}
              shorts={shorts}
              setShorts={setShorts}
            />
          ))}
        </LinkList>
      </Container>
    </LinksRenderStyle>
  );
}
const Container = styled.div`
  width: 80%;
`;

const LinksRenderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 22px;
`;

const LinkList = styled.ul`
  width: 100%;
  margin-top: 59px;
  gap: 42px;
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  li {
    border: 1px solid rgba(120, 177, 89, 0.25);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #80cc74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    flex: none;
    order: 1;
    flex-grow: 0;

    > div {
      padding: 21px;
      width: 26%;
      max-width: 26%;
      cursor: default;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    > div:first-child,
    > div:nth-child(2) {
      cursor: pointer;
    }

    > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > div:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        max-width: 90%;
      }
      span {
        margin-right: 5px;
      }
    }

    > div:first-child {
      width: 30%;
      max-width: 30%;
      display: flex;
    }
  }
`;
