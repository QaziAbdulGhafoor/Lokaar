import ListingCard from "./ListingCard";
import api from "../../API/api";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ListingFilterBar from "./ListingFilterBar";
import { FetchingContext } from "../../Context/FetchingContext";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const { Flistings, isFetching } = useContext(FetchingContext);

  useEffect(() => {
    setListings(Flistings);
  }, [Flistings]);

  return (
    <div className="container flex flex-row">
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
