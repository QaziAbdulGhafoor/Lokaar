import ListingCard from "./ListingCard";
import api from "../../../API/api";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ListingFilterBar from "../Filter/ListingFilterBar";
import { FetchingContext } from "../../../Context/FetchingContext";
import { AlertContext } from "../../../Context/AlertContext";
import ShowAlert from "../../../Components/ui/ShowAlert";
import ListingsGrid from "./ListingsGrid";

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

  return (
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
  );
};

export default Listings;
