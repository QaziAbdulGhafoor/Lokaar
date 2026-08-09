// import { createContext, useState, useEffect, useContext } from "react";
// import api from "../API/api";
// import { FilterContext } from "./FilterContext";

// export const FetchingContext = createContext(null);

// export const FetchingProvider = ({ children }) => {
//   const { filters, setFilters } = useContext(FilterContext);
//   const [isFetching, setIsFetching] = useState(false);
//   const [listings, setListings] = useState([]);
//   useEffect(() => {
//     //const res = await api.get("/listings");
//     const fetFunc = () => {
//       console.log("fetch context working", isFetching, listings, filters);
//     };
//     fetFunc();
//   }, []);
//   return (
//     <FetchingContext.Provider value={{ isFetching, setIsFetching }}>
//       {children}
//     </FetchingContext.Provider>
//   );
// };
