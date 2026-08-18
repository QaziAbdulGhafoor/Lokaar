import { createContext, useContext, useEffect, useState } from "react";

export const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  console.log("ALERT PROVIDER RENDER");
  // useContext(() => {
  //   console.log(alert);
  // }, []);
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
