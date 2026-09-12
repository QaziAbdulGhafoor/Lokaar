import React from "react";
import Rating from "@mui/material/Rating";
const ReviewsTile = ({ reviews }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mt-4">Reviews</h2>
      <div className="reviews-container flex flex-row flex-wrap gap-4 ">
        {reviews.map((rev) => {
          return (
            <div className="flex flex-col border-1 border-gray-300 rounded px-2 w-62">
              <div className="w-full top flex flex-row justify-between items-center mt-2">
                <p className="bg-blue-700 h-8 w-8 text-white text-center rounded-full pt-1 ">
                  {rev.creator.username[0]}
                </p>
                <p className="text-sm font-semibold">
                  {rev.creator.username.slice(0, 10)}
                </p>
                <Rating
                  name="read-only"
                  value={rev.rating}
                  size="small"
                  readOnly
                />
              </div>
              <div className="comment mt-4 mb-2">
                <p className="text-sm px-1 opacity-85">{rev.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReviewsTile;
