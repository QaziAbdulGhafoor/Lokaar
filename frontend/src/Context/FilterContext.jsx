import { createContext, useEffect, useState } from "react";
export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    min: 0,
    max: 0,
    category: "",
  });
  useEffect(() => {
    console.log("working filter context", filters);
  }, []);
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
