import React, { useState, createContext, useEffect } from "react";
import api from "../API/api";

export const ListingContext = createContext(null);

export const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState({
    title: "",
    about: "",
  });

  return (
    <ListingContext.Provider value={{ listing, setListing }}>
      {children}
    </ListingContext.Provider>
  );
};
