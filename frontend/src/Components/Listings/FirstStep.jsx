import React, { useContext, useState } from "react";
import { ListingContext } from "../../Context/ListingContext";

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const X = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function FirstStep({ setStep }) {
  const { listing, setListing } = useContext(ListingContext);

  const [avatar, setAvatar] = useState({
    filename: "",
    url: "",
  });

  const handleAv = (e) => {
    setAvatar(event.target.files[0]);
  };

  console.log(listing);

  const handleNext = () => {
    setListing((prev) => {
      return { ...prev, avatar: avatar };
    });
    setStep(2);
  };

  const handleChange = (e) => {
    setListing((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    console.log(listing);
  };

  const steps = [
    { number: 1, label: "Service Details" },
    { number: 2, label: "Availability" },
    { number: 3, label: "Review & Publish" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Step indicator */}

      <div className="px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto flex items-center justify-between sm:justify-center sm:gap-0">
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center flex-shrink-0">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold ${
                    step.number === 1
                      ? "bg-blue-600 text-white"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`mt-2 text-xs sm:text-sm font-medium whitespace-nowrap ${
                    step.number === 1 ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 sm:mx-4 sm:w-24 md:w-32 mt-[-20px] sm:mt-[-24px] ${"border-t-2 border-dashed border-gray-300"}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form card */}
      <div className="flex-1 px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Service Details
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Tell us what you offer and how much you charge
            </p>

            <div className="mt-6 sm:mt-8 space-y-6">
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

              {/* Service avatar */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Profile Picture
                </label>
                <input
                  name="title"
                  onChange={handleAv}
                  type="file"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={listing.profession}
                    name="profession"
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option
                      value="electrician"
                      selected={(listing.profession = "electrician")}
                    >
                      {" "}
                      Electrician
                    </option>
                    <option
                      value="plumber"
                      selected={(listing.profession = "plumber")}
                    >
                      {" "}
                      Plumber
                    </option>
                    <option
                      value="tutor"
                      selected={(listing.profession = "tutor")}
                    >
                      {" "}
                      Tutor
                    </option>
                    <option
                      value="carpenter"
                      selected={(listing.profession = "carpenter")}
                    >
                      {" "}
                      Carpenter
                    </option>
                    <option
                      value="cleaner"
                      selected={(listing.profession = "cleaner")}
                    >
                      {" "}
                      Cleaner
                    </option>
                    <option
                      value="painter"
                      selected={(listing.profession = "painter")}
                    >
                      {" "}
                      painter
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Description */}
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
                <div className="text-right text-xs text-gray-400 mt-1">
                  124 / 500
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="block text-sm font-semibold text-gray-800 mb-2">
                  Share Your Professional Experience
                </h2>
                <div className="flex flex-row justify-start gap-3">
                  <label className="flex-1 flex items-center gap-2.5 rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base text-gray-600 cursor-pointer has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-600 transition-colors">
                    <input
                      type="radio"
                      name="experience"
                      value="beginner"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      onChange={handleChange}
                      checked={listing.experience === "beginner"}
                    />
                    Beginner
                  </label>
                  <label className="flex-1 flex items-center gap-2.5 rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base text-gray-600 cursor-pointer has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-600 transition-colors">
                    <input
                      onChange={handleChange}
                      checked={listing.experience === "intermediate"}
                      type="radio"
                      name="experience"
                      value="intermediate"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    Intermediate
                  </label>
                  <label className="flex-1 flex items-center gap-2.5 rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base text-gray-600 cursor-pointer has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-600 transition-colors">
                    <input
                      onChange={handleChange}
                      checked={listing.experience === "expert"}
                      type="radio"
                      name="experience"
                      value="expert"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    Expert
                  </label>
                </div>
              </div>
            </div>
            {/* Hourly Rate */}
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
                  defaultValue="25"
                  className="flex-1 px-3 sm:px-4 py-2.5 text-sm sm:text-base text-gray-700 focus:outline-none min-w-0"
                  required
                />
                <span className="flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500 border-l border-gray-300 text-sm sm:text-base">
                  /hr
                </span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between mt-6 gap-3">
            <button type="button" className="blue-ouline-btn">
              ← Back
            </button>
            <button type="submit" className="blue-btn" onClick={handleNext}>
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
