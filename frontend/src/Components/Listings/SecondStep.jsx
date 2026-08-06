import { useState } from "react";

import React, { useContext, useEffect } from "react";
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

const Clock = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 15" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function SecondStep({ setStep }) {
  const [availability, setAvailability] = useState({
    days: [],
    startTime: "09:00",
    endTime: "17:00",
  });

  const daysOfWeek = [
    { label: "Sun", value: 0 },
    { label: "Mon", value: 1 },
    { label: "Tue", value: 2 },
    { label: "Wed", value: 3 },
    { label: "Thu", value: 4 },
    { label: "Fri", value: 5 },
    { label: "Sat", value: 6 },
  ];

  const toggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  const updateTime = (field, value) => {
    setAvailability((prev) => ({ ...prev, [field]: value }));
  };

  const { listing, setListing } = useContext(ListingContext);
  console.log(listing);

  // sync local availability state into context's listing whenever it changes
  useEffect(() => {
    setListing((prev) => ({ ...prev, availability }));
  }, [availability]);

  const handleChange = (e) => {
    setListing((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlePrev = () => {
    setStep(1);
  };

  const handleNext = () => {
    setStep(3);
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
                    step.number === 2
                      ? "bg-blue-600 text-white"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`mt-2 text-xs sm:text-sm font-medium whitespace-nowrap ${
                    step.number === 2 ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 sm:mx-4 sm:w-24 md:w-32 mt-[-20px] sm:mt-[-24px] border-t-2 border-dashed border-gray-300" />
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
              Availability
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Let customers know when you're available
            </p>

            <div className="mt-6 sm:mt-8 space-y-6">
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Available Days
                </p>
                <div className="flex flex-wrap gap-3">
                  {daysOfWeek.map(({ label, value }) => {
                    const isSelected = availability.days.includes(value);
                    return (
                      <label
                        key={value}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer select-none
                  ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-300 text-gray-600"
                  }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleDay(value)}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <span className="text-sm font-medium">{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Working hours */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Working Hours
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={availability.startTime}
                      onChange={(e) => updateTime("startTime", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">
                      End Time
                    </label>
                    <input
                      type="time"
                      value={availability.endTime}
                      onChange={(e) => updateTime("endTime", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="pb-6 border-b border-gray-100">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Response Time
                </label>
                <div className="relative">
                  <select
                    name="responseTime"
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value={1} selected={listing.responseTime === 1}>
                      Within 1 hour
                    </option>
                    <option value={3} selected={listing.responseTime === 3}>
                      Within 3 hours
                    </option>
                    <option value={24} selected={listing.responseTime === 24}>
                      Within 24 hours
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Service Area */}
              <div className="pb-6 border-b border-gray-100">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Service Area
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    placeholder="e.g. Within 10 miles of your location"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Emergency Availability */}
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between mt-6 gap-3">
            <button
              type="button"
              className="blue-ouline-btn"
              onClick={handlePrev}
            >
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
