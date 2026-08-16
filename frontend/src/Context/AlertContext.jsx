import { createContext, useState } from "react";

export const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
