import React, { useContext } from "react";
import RangeSlider from "./RangeSlider";
import NativeSelectDemo from "./DistanceOptions";
import api from "../../API/api";
import { FilterContext } from "../../Context/FilterContext";
const ListingFilterBar = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [filter, setFilter] = React.useState({
    min: 200,
    max: 10000,
    category: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleFilterSub = async (e) => {
    e.preventDefault();
    setFilters((prev) => {
      return {
        ...prev,
        min: filter.min,
        max: filter.max,
        category: filter.category,
      };
    });
    console.log("file filters are", filter);
    console.log("context filters are", filters);
    // await api
    //   .get(`/listings`, {
    //     params: {
    //       min: filter.min,
    //       max: filter.max,
    //       category: filter.category,
    //     },
    //   })
    //   .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleFilterSub}>
      <div className="sidebar position:sticky h-[calc(100vh-64px)] w-66 bg-white border-r-1 border-gray-200  flex flex-col items-start gap-6">
        <h1 className="text-2xl font-semibold mt-4 self-center">Filters</h1>
        <div className="category flex flex-col gap-4  ml-4 ">
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
        <div className="price category flex flex-col gap-2  ml-4 ">
          <h2 className="text-xl font-medium">Price Range</h2>
          <RangeSlider value={[filter.min, filter.max]} setValue={setFilter} />
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
          <button type="submit" className="blue-btn ">
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};

export default ListingFilterBar;
