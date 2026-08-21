import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import api from "../../API/api";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const getFav = async () => {
      const res = await api.get("/listings/favourites");
      console.log(res);
      setFavourites(res.data.favourites);
    };
    getFav();

    // console.log(favourites);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-medium text-center mt-6">Favourites</h1>
      <div className="flex flex-row gap-4 justify-center flex-wrap mt-6">
        {favourites.map((listing) => {
          return <ListingCard listing={listing} />;
        })}
      </div>
    </>
  );
};

export default Favourites;
