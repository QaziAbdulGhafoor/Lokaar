import ListingCard from "./ListingCard";
import api from "../../API/api";
import React from "react";
import { useState, useEffect } from "react";
import ListingFilterBar from "./ListingFilterBar";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getListings() {
      const response = await api.get("/listings");
      setListings(response.data.listings ?? []);
    }
    getListings();
  }, []);

  return (
    <div className="container flex flex-row ">
      <ListingFilterBar />
      <div className="listings flex flex-wrap gap-10 ml-10 mt-8">
        {listings.map((listing) => (
          <ListingCard listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
