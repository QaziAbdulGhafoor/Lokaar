import { createContext, useState, useEffect, useContext } from "react";
import api from "../API/api";
import { FilterContext } from "./FilterContext";

export const FetchingContext = createContext(null);

export const FetchingProvider = ({ children }) => {
  const { filters } = useContext(FilterContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const maxPerPage = 6;
  const [isFetching, setIsFetching] = useState(false);
  const [Flistings, setFListings] = useState([]);
  useEffect(() => {
    const getListings = async () => {
      if (filters) {
        try {
          setIsFetching(true);
          const res = await api.get("/listings", {
            params: {
              filters: JSON.stringify(filters),
              limit: maxPerPage,
              page,
            },
          });
          setFListings(res.data.listings);
          setTotalPages(res.data.pagination.totalPages);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetching(false);
        }
      } else {
        const res = await api.get("/listings", {
          params: { limit: maxPerPage, page },
        });
        console.log(res);
        setFListings(res.data.listings);
        setTotalPages(res.data.pagination.totalPages);
      }
    };
    getListings();
  }, [filters, page]);
  return (
    <FetchingContext.Provider
      value={{
        isFetching,
        setIsFetching,
        Flistings,
        setFListings,
        page,
        setPage,
        totalPages,
      }}
    >
      {children}
    </FetchingContext.Provider>
  );
};
