import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import apiUrls from "../services/apiUrls";
import { BsClipboard2Fill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineRollback } from "react-icons/ai";
import SessionContext from "../contexts/SessionContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LinkPage() {
  const [linkInfo, setLinkInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { token } = useContext(SessionContext);

  useState(() => {
    fetchLinkInfo();
  }, []);

  async function fetchLinkInfo() {
    try {
      const { data } = await apiUrls.getLinkInfo(params.id);
      setLinkInfo(data);
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
    }
  }
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    toast("Link copiado");
  }
  async function deleteLink(id) {
    if (token) {
      setLoading(true);
      try {
        await apiUrls.deleteShort(id, token.token);
        toast("Link deletado");
        setTimeout(() => {
          setLoading(false);
          navigate(-1);
        }, 1500);
      } catch (error) {
        alert(`${error.response.status}: ${error.response.data}`);
        setLoading(false);
      }
    } else {
      toast("Você não está logado");
    }
  }

  return (
    <PageStyle>
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
        <Frame>
          <Title>As informações do link</Title>
          <ul>
            <li>
              <p>link original:</p>
              <p>{linkInfo?.url}</p>
            </li>
            <li>
              <p>link encurtado:</p>
              <p>{linkInfo?.shortUrl}</p>
            </li>
          </ul>
          <BtnWrapper>
            <Icons>
              <button onClick={() => navigate(-1)}>
                <AiOutlineRollback size={40} color="rgba( 100, 100, 100, 1)" />
              </button>
              <button
                onClick={() =>
                  copyToClipboard(
                    `${window.location.href}r/${linkInfo?.shortUrl}`
                  )
                }
                disabled={!linkInfo || loading}
              >
                <BsClipboard2Fill size={40} color="#5d9040" />
              </button>
              <button
                disabled={!linkInfo || loading}
                onClick={() => deleteLink(linkInfo?.id)}
              >
                <FaTrashAlt size={40} color="rgba(200,0,0,1)" />
              </button>
            </Icons>

            <button
              onClick={() => navigate(`/r/:${linkInfo?.shortUrl}`)}
              disabled={!linkInfo || loading}
            >
              Ir para o link
            </button>
          </BtnWrapper>
        </Frame>
      </Container>
    </PageStyle>
  );
}
const PageStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 82%;
  display: flex;
  justify-content: center;
`;
const Frame = styled.div`
  width: 100%;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  gap: 13px;
  padding: 19px 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const Title = styled.h4`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
`;
const BtnWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  button {
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    background: #5d9040;
    border-radius: 12px;
    padding: 21px 44px;
    border: none;
    p {
      width: 94px;
    }
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background: #ffffff;
    color: #5d9040;
    border-radius: 12px;
    padding: 0px;
    margin: 21px 44px;
    border: none;
  }
`;
