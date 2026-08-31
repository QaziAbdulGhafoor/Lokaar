import React, { useContext, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import NativeSelectDemo from "./DistanceOptions";
import api from "../../../API/api";
import { FilterContext } from "../../../Context/FilterContext";

const ListingFilterBar = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [filter, setFilter] = React.useState({
    min: 200,
    max: 10000,
    category: "",
  });
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleFilterSub = async (e) => {
    e.preventDefault();

    const newFilters = {
      min: filter.min,
      max: filter.max,
      category: filter.category,
    };
    setFilters(newFilters);
    setFiltersOpen(false); // close drawer on mobile after applying
  };

  return (
    <>
      {/* Floating trigger button — mobile only */}
      <button
        type="button"
        onClick={() => setFiltersOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 md:hidden"
        aria-label="Open filters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h18M6 12h12M10 20h4"
          />
        </svg>
      </button>

      {/* Backdrop — mobile only, shown when drawer is open */}
      {filtersOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setFiltersOpen(false)}
        />
      )}

      <form onSubmit={handleFilterSub}>
        <div
          className={`
            sidebar fixed inset-y-0 left-0 z-50 h-full w-72 transform overflow-y-auto
            bg-white transition-transform duration-300 ease-in-out
            flex flex-col items-start gap-6 border-r border-gray-200
            ${filtersOpen ? "translate-x-0" : "-translate-x-full"}
            md:sticky md:top-16 md:z-auto md:h-[calc(100vh-64px)] md:w-66
            md:translate-x-0
          `}
        >
          {/* Close button — mobile only */}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="self-end mr-4 mt-4 rounded-md p-1 text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Close filters"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h1 className="text-2xl font-semibold mt-4 self-center md:mt-0">
            Filters
          </h1>

          <div className="category flex flex-col gap-4 ml-4">
            <h2 className="text-xl font-medium">Category</h2>
            <div className="options flex flex-col gap-4 ml-2">
              <span>
                <input
                  type="radio"
                  name="category"
                  id="electrician"
                  value="electrician"
                  checked={filter.category === "electrician"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="electrician" className="ml-2">
                  Electrician
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="category"
                  id="plumber"
                  value="plumber"
                  checked={filter.category === "plumber"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="plumber" className="ml-2">
                  Plumber
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="category"
                  id="painter"
                  value="painter"
                  checked={filter.category === "painter"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="painter" className="ml-2">
                  Painter
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="category"
                  id="carpenter"
                  value="carpenter"
                  checked={filter.category === "carpenter"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="carpenter" className="ml-2">
                  Carpenter
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="category"
                  id="tutor"
                  value="tutor"
                  checked={filter.category === "tutor"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="tutor" className="ml-2">
                  Tutor
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="category"
                  id="cleaner"
                  value="cleaner"
                  checked={filter.category === "cleaner"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="cleaner" className="ml-2">
                  Cleaner
                </label>
              </span>
            </div>
          </div>

          <div className="price category flex flex-col gap-2 ml-4">
            <h2 className="text-xl font-medium">Price Range</h2>
            <RangeSlider
              value={[filter.min, filter.max]}
              setValue={setFilter}
            />
          </div>
          {/* <div className="location ml-4 ">
          <h2 className="text-xl font-medium">Distance</h2>
          <select
            name="distance"
            id="distance"
            className=" bg-white text-gray-700 outline-gray-400 py-2 px-2 rounded ml-3 mt-2"
          >
            <option value="" disabled selected>
              Select Distance
            </option>
            <option value="1">1 kilometer</option>
            <option value="5">5 kilometer</option>
            <option value="10">10 kilometer</option>
            <option value="20">20 kilometer</option>
          </select>
        </div> */}
          <div className="submit self-center">
            <button type="submit" className="blue-btn">
              Apply
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ListingFilterBar;
