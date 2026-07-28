import ListingCard from "./ListingCard";

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

import React from "react";

const Listings = () => {
  return <ListingCard listing={listing} />;
};

export default Listings;
