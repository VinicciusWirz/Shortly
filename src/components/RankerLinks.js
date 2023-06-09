import { Tooltip } from "react-tooltip";
import { useState } from "react";
import formatNumRndr from "../utils/formatNumRndr";

export default function RankerLinks(props) {
  const { shortUrl, url, visitCount } = props.item;
  const [copyTip, setCopyTip] = useState("Copiar link");
  const redirectLink = `${window.location.protocol}//${window.location.host}/r/${shortUrl}`;
  const countFormat = formatNumRndr(Number(visitCount));

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
          onClick={() => window.open(redirectLink, "_blank")}
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
          {countFormat}
        </div>
      </li>
    </>
  );
}
