import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import SessionContext from "../contexts/SessionContext";
import apiAuth from "../services/apiAuth";
import { ThreeDots } from "react-loader-spinner";

export default function SigninPage() {
  const { token, setToken } = useContext(SessionContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiAuth.signin(form);
      setToken(data);
      const localData = JSON.stringify(data);
      localStorage.setItem("session", localData);
      setLoading(false);
      navigate("/");
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
      setLoading(false);
    }
  }

  return (
    <SigninStyle>
      <form onSubmit={handleForm}>
        <InputWrapper>
          <input
            placeholder="E-mail"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="email"
            disabled={loading}
            autoComplete="email"
            required
          />
          <input
            placeholder="Senha"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            type="password"
            disabled={loading}
            autoComplete="password"
            required
          />
        </InputWrapper>
        <button type="submit" disabled={loading}>
          {loading ? <ThreeDots height={18} /> : "Entrar"}
        </button>
      </form>
    </SigninStyle>
  );
}
const SigninStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 62%;
    display: flex;
    flex-direction: column;
    gap: 61px;
    align-items: center;
    input {
      background: #ffffff;
      border: 1px solid rgba(120, 177, 89, 0.25);
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 12px;
      padding: 21px;
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
      &:disabled {
        background: #dddd;
      }
    }
    button {
      background: #5d9040;
      border-radius: 12px;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
      border: none;
      padding: 21px 50px;
      cursor: pointer;
      &:disabled {
        background: #617a55;
      }
    }
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
`;
