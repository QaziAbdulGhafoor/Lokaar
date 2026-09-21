import ListingCard from "./ListingCard";
import api from "../../../API/api";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ListingFilterBar from "../Filter/ListingFilterBar";
import { FetchingContext } from "../../../Context/FetchingContext";
import { AlertContext } from "../../../Context/AlertContext";
import ShowAlert from "../../../Components/ui/ShowAlert";
import ListingsGrid from "./ListingsGrid";
import PaginationTile from "../../../Components/ui/PaginationTile";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const { Flistings, isFetching, setPage, totalPages } =
    useContext(FetchingContext);
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    setListings(Flistings);
  }, [Flistings]);

  // const refresh = setTimeout(() => {
  //   setAlert({ type: "", message: "" });
  // }, 5000);

  // console.log(listings.length);

  return (
    <>
      <div className="container flex flex-row">
        {alert.type !== "" ? (
          <ShowAlert
            message={alert.message}
            type={alert.type}
            className="mx-auto"
          />
        ) : (
          <></>
        )}
        <div className="md:h-[calc(100vh-128px)]">
          <ListingFilterBar />
        </div>

        <div className="md:h-[calc(100vh-110px)] overflow-scroll">
          <ListingsGrid listings={listings} />
        </div>
      </div>
      <div className="z-900 flex flex-row justify-center w-screen absolute b-0 bg-white py-1">
        <PaginationTile pages={totalPages} setPage={setPage} />
        {/* Math.ceil(listings.length / 6) */}
      </div>
    </>
  );
};

export default Listings;
