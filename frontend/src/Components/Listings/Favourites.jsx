import React, { useEffect } from "react";
import ListingCard from "./ListingCard";
import api from "../../API/api";

const Favourites = () => {
  useEffect(() => {
    const getFav = () => {
      const res = api.get("/listings/favourites");
      console.log(res);
      //return res.data.favourites;
    };
    getFav();
    // console.log(favourites);
  }, []);

  return (
    <div>
      {/* {favourites.map((listing) => {
        return <ListingCard listing={listing} />;
      })} */}
    </div>
  );
};

export default Favourites;
