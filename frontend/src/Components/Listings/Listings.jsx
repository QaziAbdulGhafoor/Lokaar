import ListingCard from "./ListingCard";
import api from "../../API/api";
import React from "react";
import { useState, useEffect } from "react";

const listing = {
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWM596Afm9t3O-THVLpsoat7whKGhFXH4k1MUl7cGVZ9-3gEbx2dK93g&s=10",
  title: "Kashif",
  category: "Tutor",
  location: "Pakistan",
  price: 900,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.",
};
const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getListing() {
      const response = await api.get("/listings");
      setListings(response.data);
      console.log(response.data);
    }
    getListing();
  }, []);

  return (
    <div className="grid grid-cols-3 mt-4 ml-50 mr-20">
      <ListingCard listing={listings.listings} />
    </div>
  );
};

export default Listings;
