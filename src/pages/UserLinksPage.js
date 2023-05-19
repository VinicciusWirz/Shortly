import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import apiUsers from "../services/apiUsers";
import { useNavigate } from "react-router-dom";
import SessionContext from "../contexts/SessionContext";
import apiUrls from "../services/apiUrls";
import UserLinks from "../components/UserLinks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserLinksPage() {
  const { token, setToken } = useContext(SessionContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [shorts, setShorts] = useState([]);
  const [form, setForm] = useState({ url: "" });

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    fetchList();
  }, []);

  async function fetchList() {
    setLoading(true);
    try {
      const info = await apiUsers.userLinks(token.token);
      if (!token.name) {
        const userData = { ...token, name: info.data.name };
        const localData = JSON.stringify(userData);
        localStorage.setItem("session", localData);
        setToken(userData);
      }
      setShorts(info.data.shortenedUrls);
      setLoading(false);
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
      setLoading(false);
    }
  }

  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiUrls.createShort(form, token.token);
      setShorts([
        ...shorts,
        { url: form.url, shortUrl: data.shortUrl, id: data.id, visitCount: 0 },
      ]);
      setForm({ url: "" });
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
    <UserLinksStyle>
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
        <form onSubmit={handleForm}>
          <input
            placeholder="Links que cabem no bolso"
            onChange={(e) => setForm({ url: e.target.value })}
            value={form.url}
          />
          <button type="submit" disabled={loading}>
            <p>Encurtar link</p>
          </button>
        </form>
        <LinkList>
          {shorts.map((l) => (
            <UserLinks
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
    </UserLinksStyle>
  );
}
const Container = styled.div`
  width: 80%;
`;
const UserLinksStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    gap: 113px;
    input {
      padding: 21px;
      background: #ffffff;
      border: 1px solid rgba(120, 177, 89, 0.25);
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 12px;
      width: 100%;
      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9c9c9c;
      }
      &:focus {
        outline-color: rgba(0, 155, 0, 0.1);
      }
    }
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
  }
`;
const LinkList = styled.ul`
  width: 100%;
  margin-top: 59px;
  gap: 42px;
  display: flex;
  flex-direction: column;

  > :last-child {
    margin-bottom: 40px;
  }

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
      width: 22%;
      max-width: 22%;
      cursor: default;
    }

    > div:first-child,
    > div:nth-child(2) {
      cursor: pointer;
    }

    > div:nth-child(2) {
      display: flex;
      justify-content: center;
    }

    > div:first-child {
      width: 30%;
      max-width: 30%;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
