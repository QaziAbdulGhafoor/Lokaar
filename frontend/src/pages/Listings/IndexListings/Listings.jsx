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
  const { Flistings, isFetching } = useContext(FetchingContext);
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    setListings(Flistings);
    console.log(alert);
  }, [Flistings]);

  // const refresh = setTimeout(() => {
  //   setAlert({ type: "", message: "" });
  // }, 5000);

  console.log(listings.length);

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
        <ListingFilterBar />
        <ListingsGrid listings={listings} />
      </div>
      <div className=" z-9000 absolute b-0 flex flex-row justify-center w-screen">
        <PaginationTile pages={Math.ceil(listings.length / 6)} />
      </div>
    </>
  );
};

export default Listings;
