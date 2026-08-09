import { createContext, useState, useEffect, useContext } from "react";
import api from "../API/api";
import { FilterContext } from "./FilterContext";

export const FetchingContext = createContext(null);

export const FetchingProvider = ({ children }) => {
  const { filters } = useContext(FilterContext);
  const [isFetching, setIsFetching] = useState(false);
  const [Flistings, setFListings] = useState([]);
  useEffect(() => {
    const getListings = async () => {
      if (filters) {
        try {
          setIsFetching(true);
          const res = await api.get("/listings", { params: filters });
          setFListings(res.data.listings);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetching(false);
        }
      } else {
        const res = await api.get("/listings");
        setFListings(res.data.listings);
      }
    };
    getListings();
  }, [filters]);
  return (
    <FetchingContext.Provider value={{ isFetching, setIsFetching, Flistings }}>
      {children}
    </FetchingContext.Provider>
  );
};
