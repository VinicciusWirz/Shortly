import { FaTrashAlt } from "react-icons/fa";
import { BsClipboard2Fill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { styled } from "styled-components";
import apiUrls from "../services/apiUrls";
import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";

export default function UserLinks(props) {
  const { shortUrl, url, id, visitCount } = props.item;
  const { token } = useContext(SessionContext);
  const redirectLink = `${window.location.href}r/${shortUrl}`;
  const navigate = useNavigate();

  async function deleteLink(id) {
    props.setLoading(true);
    try {
      await apiUrls.deleteShort(id, token.token);
      const filteredShorts = props.shorts.filter((s) => s.id !== id);
      props.setShorts(filteredShorts);
      props.setLoading(false);
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
      props.setLoading(false);
    }
  }

  return (
    <>
      <li key={shortUrl}>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={url}
          onClick={() => navigate(`/url/${id}`)}
        >
          <p>{url}</p>
          <Tooltip id="my-tooltip" />
        </div>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={redirectLink}
          onClick={() => props.copyToClipboard(redirectLink)}
        >
          <BsClipboard2Fill style={{ fontSize: "20px", marginRight: "5px" }} />
          <p>{shortUrl}</p>
          <Tooltip id="my-tooltip" />
        </div>
        <div>Quantidade de visitantes: {visitCount}</div>
        <DeleteButton onClick={() => deleteLink(id)} disabled={props.loading}>
          <FaTrashAlt size={22} />
        </DeleteButton>
      </li>
    </>
  );
}
const DeleteButton = styled.button`
  width: 13%;
  height: 100%;
  background: #ffff;
  padding: 21px 0px;
  border-radius: 0px 12px 12px 0px;
  color: #ea4f4f;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: none;
`;