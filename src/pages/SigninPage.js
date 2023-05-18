import { styled } from "styled-components";

export default function SigninPage() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <SigninStyle>
      <form onSubmit={handleForm}>
        <InputWrapper>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
        </InputWrapper>
        <button type="submit">Entrar</button>
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
    }
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
`;
