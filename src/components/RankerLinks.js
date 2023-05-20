import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RankerLinks(props) {
  const { shortUrl, url, id, visitCount } = props.item;
  const [copyTip, setCopyTip] = useState("Copiar link");
  const redirectLink = `${window.location.href}r/${shortUrl}`;
  const navigate = useNavigate();
  function copy() {
    props.copyToClipboard(redirectLink);
    setCopyTip("Link copiado!");
    setTimeout(() => {
      setCopyTip("Copiar link");
    }, 2000);
  }

  return (
    <>
      <li key={shortUrl}>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Visitar link"
          onClick={() => navigate(`/url/${id}`)}
        >
          <p>{url}</p>
          <Tooltip id="my-tooltip" />
        </div>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={copyTip}
          onClick={copy}
        >
          <p>{shortUrl}</p>
          <Tooltip id="my-tooltip" />
        </div>
        <div>
          <p>Quantidade de visitantes</p>
          <span>:</span>
          {visitCount}
        </div>
      </li>
    </>
  );
}
