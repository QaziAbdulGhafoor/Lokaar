import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";
import ListingCard from "./ListingCard";
import DetailCard from "./DetailCard";
import Loader from "./Loader";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const getListing = async () => {
      const response = await api.get(`/listings/${id}`);
      setListing(response.data.listing);
    };
    getListing();
  }, [id]);
  console.log(listing);
  return (
    <div>
      {listing ? (
        <DetailCard listing={listing} id={id} />
      ) : (
        <Loader message="Preparing Actions"></Loader>
      )}
    </div>
  );
};

export default ListingDetails;
