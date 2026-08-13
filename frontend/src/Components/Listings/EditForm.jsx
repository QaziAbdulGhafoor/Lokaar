import { useContext } from "react";
import React from "react";
import { ListingContext } from "../../Context/ListingContext";

const EditForm = () => {
  const { listing, setListing } = useContext(ListingContext);
  return (
    <div>
      {" "}
      {/* Service Title */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Service Title
        </label>
        <input
          value={listing.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="e.g. Professional Electrical Wiring"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Description
        </label>
        <textarea
          value={listing.about}
          name="about"
          onChange={handleChange}
          rows={4}
          placeholder="Describe your service, what's included, and what makes you unique..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base text-gray-700 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="text-right text-xs text-gray-400 mt-1">124 / 500</div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2 mt-4">
          Hourly Rate
        </label>
        <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
          <span className="flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500 border-r border-gray-300 text-sm sm:text-base">
            $
          </span>
          <input
            value={listing.price}
            name="price"
            onChange={handleChange}
            type="number"
            className="flex-1 px-3 sm:px-4 py-2.5 text-sm sm:text-base text-gray-700 focus:outline-none min-w-0"
            required
          />
          <span className="flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500 border-l border-gray-300 text-sm sm:text-base">
            /hr
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
