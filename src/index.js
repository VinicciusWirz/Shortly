import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResetStyle from "./styles/ResetStyle";
import GlobalStyle from "./styles/GlobalStyle";
import { SessionProvider } from "./contexts/SessionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ResetStyle />
    <GlobalStyle />
    <SessionProvider>
      <App />
    </SessionProvider>
  </>
);
