import { createContext, useState } from "react";

const SessionContext = createContext({});

export function SessionProvider({ children }) {
  const localData = JSON.parse(localStorage.getItem("session"));
  const [token, setToken] = useState(localData);
  return (
    <SessionContext.Provider value={{ token, setToken }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;
