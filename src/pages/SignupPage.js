import { useEffect, useState } from "react";
import { styled } from "styled-components";
import SessionContext from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import { ThreeDots } from "react-loader-spinner";

export default function SignupPage() {
  const { token } = SessionContext;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  async function handleForm(e) {
    e.preventDefault();
    if (form.confirmPassword !== form.password) {
      return alert("Senhas precisam ser iguais");
    }
    setLoading(true);
    try {
      await apiAuth.signup(form);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
      setLoading(false);
    }
  }

  return (
    <SignupStyle>
      <form onSubmit={handleForm}>
        <InputWrapper>
          <input
            placeholder="Nome"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            type="text"
            disabled={loading}
          />
          <input
            placeholder="E-mail"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="email"
            disabled={loading}
          />
          <input
            placeholder="Senha"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            type="password"
            disabled={loading}
          />
          <input
            placeholder="Confirmar senha"
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            value={form.confirmPassword}
            type="password"
            disabled={loading}
          />
        </InputWrapper>
        <button type="submit" disabled={loading}>
          {loading ? <ThreeDots height={18} /> : "Criar Conta"}
        </button>
      </form>
    </SignupStyle>
  );
}

const SignupStyle = styled.div`
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
