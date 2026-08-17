import ListingCard from "./ListingCard";
import api from "../../API/api";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ListingFilterBar from "./ListingFilterBar";
import { FetchingContext } from "../../Context/FetchingContext";
import { AlertContext } from "../../Context/AlertContext";
import ShowAlert from "./ShowAlert";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const { Flistings, isFetching } = useContext(FetchingContext);
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    setListings(Flistings);
    console.log(alert);
  }, [Flistings]);

  const refresh = setTimeout(() => {
    setAlert({ type: "", message: "" });
  }, 5000);

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
      <div className="listings h-[calc(100vh-64px)] overflow-y-scroll flex flex-wrap gap-10 pt-8 pl-8">
        {listings.map((listing) => (
          <ListingCard listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
