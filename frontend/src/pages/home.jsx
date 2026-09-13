// pages/Home.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import HowItWorks from "./Working/HowItWorks";
import ListingsGrid from "./Listings/IndexListings/ListingsGrid";
import api from "../API/api";

const CATEGORIES = [
  { name: "Electrician", value: "electrician" },
  { name: "Plumber", value: "plumber" },
  { name: "Painter", value: "painter" },
  { name: "Tutor", value: "tutor" },
  { name: "Carpenter", value: "carpenter" },
  { name: "Cleaner", value: "cleaner" },
];

export default function Home() {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get("/listings", { params: { limit: 8 } });
        setListings(res.data.listings);
      } catch (err) {
        console.error("Failed to load listings", err);
      }
    };
    fetchListings();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (service) params.set("category", service);
    if (location) params.set("location", location);
    navigate(`/listings?${params.toString()}`);
  };

  const handleCategoryClick = (value) => {
    navigate(`/listings?category=${value}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <Navbar />

      <main className="flex-1">
        {/* Hero + search ticket */}
        <section className="px-4 pt-16 pb-12 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ color: "#1C1917" }}
            >
              Skilled help, five minutes from home
            </h1>
            <p className="text-stone-600 text-base mb-8 max-w-md">
              Electricians, plumbers, painters, carpenters, tutors and cleaners
              you can book directly — no calling around.
            </p>

            <form
              onSubmit={handleSearch}
              className="border border-stone-300 bg-white flex flex-col sm:flex-row"
            >
              <div className="flex-1 flex flex-col justify-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-stone-300">
                <label className="text-xs text-stone-500 mb-1">Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="bg-transparent text-stone-900 focus:outline-none"
                >
                  <option value="">Any service</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 flex flex-col justify-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-stone-300">
                <label className="text-xs text-stone-500 mb-1">Location</label>
                <input
                  type="text"
                  placeholder="City or area"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 font-medium text-white transition-colors"
                style={{ backgroundColor: "#2563EB" }}
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Categories — directory row, not card grid */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-sm font-medium text-stone-500 mb-4">
            Browse by trade
          </h2>
          <div className="border border-stone-200 divide-y divide-stone-200 bg-white">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => handleCategoryClick(c.value)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="text-stone-900 font-medium">{c.name}</span>
                <svg
                  className="w-4 h-4 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </section>

        <HowItWorks />

        {/* Providers — directory listing, not shadow cards */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-stone-500">
              Recently listed
            </h2>
            <button
              onClick={() => navigate("/listings")}
              className="text-sm font-medium"
              style={{ color: "#2563EB" }}
            >
              View all
            </button>
          </div>
          <ListingsGrid listings={listings} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
