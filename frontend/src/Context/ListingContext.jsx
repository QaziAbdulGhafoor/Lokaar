import React, { useState, createContext, useEffect } from "react";
import api from "../API/api";

export const Listing = createContext(null);

export const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState(null);

  return (
    <AuthContext.Provider value={{ listing, setListing }}>
      {children}
    </AuthContext.Provider>
  );
};
