import React, { useState, createContext, useEffect } from "react";
import api from "../API/api";

export const ListingContext = createContext(null);

export const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState({
    title: "",
    about: "",
    category: "",
    avatar: {},
    location: null,
    price: "",
    availability: {
      days: [],
      startTime: "09:00",
      endTime: "17:00",
    },
  });

  // generic updater for top-level fields (title, category, etc.)
  const updateListing = (fields) => {
    setListing((prev) => ({ ...prev, ...fields }));
  };

  // dedicated updater for availability, since it's nested
  const updateAvailability = (fields) => {
    setListing((prev) => ({
      ...prev,
      availability: { ...prev.availability, ...fields },
    }));
  };

  const toggleAvailabilityDay = (day) => {
    setListing((prev) => {
      const days = prev.availability.days.includes(day)
        ? prev.availability.days.filter((d) => d !== day)
        : [...prev.availability.days, day];
      return { ...prev, availability: { ...prev.availability, days } };
    });
  };

  return (
    <ListingContext.Provider value={{ listing, setListing }}>
      {children}
    </ListingContext.Provider>
  );
};
