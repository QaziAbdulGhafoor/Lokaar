import React from "react";
import ListingCard from "./ListingCard";

const ListingsGrid = ({ listings }) => {
  return (
    <div className="listings h-[calc(100vh-64px)] overflow-y-scroll flex flex-row flex-wrap gap-10 pt-8 px-4">
      {listings.map((listing) => (
        <ListingCard listing={listing} key={listing._id} />
      ))}
    </div>
  );
};

export default ListingsGrid;
