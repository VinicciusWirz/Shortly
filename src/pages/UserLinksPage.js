import { styled } from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export default function UserLinksPage() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <UserLinksStyle>
      <Container>
        <form onSubmit={handleForm}>
          <input placeholder="Links que cabem no bolso" />
          <button type="submit">
            <p>Encurtar link</p>
          </button>
        </form>
        <LinkList>
          <li>
            <div>https://www.driven.com.br</div>
            <div>e4231A</div>
            <div>Quantidade de visitantes: 271</div>
            <DeleteButton>
              <FaTrashAlt size={22} />
            </DeleteButton>
          </li>
          <li>
            <div>https://www.driven.com.br</div>
            <div>e4231A</div>
            <div>Quantidade de visitantes: 271</div>
            <DeleteButton>
              <FaTrashAlt size={22} />
            </DeleteButton>
          </li>
          <li>
            <div>https://www.driven.com.br</div>
            <div>e4231A</div>
            <div>Quantidade de visitantes: 271</div>
            <DeleteButton>
              <FaTrashAlt size={22} />
            </DeleteButton>
          </li>
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
    div {
      padding: 21px;
    }
  }
`;

const DeleteButton = styled.div`
  width: 13%;
  height: 100%;
  background: #ffff;
  border-radius: 0px 12px 12px 0px;
  color: #ea4f4f;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
