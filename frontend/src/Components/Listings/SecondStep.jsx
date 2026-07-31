// import React from "react";

// const SecondStep = ({ setStep }) => {
//   const handleNext = () => {
//     setStep(3);
//   };
//   const handlePrev = () => {
//     setStep(1);
//   };
//   return (
//     <div>
//       SecondStep
//       <button onClick={handlePrev} className="blue-btn">
//         prev
//       </button>
//       <button onClick={handleNext} className="blue-btn">
//         next
//       </button>
//     </div>
//   );
// };

// export default SecondStep;

import React from "react";

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
  const handleNext = () => {
    setStep(3);
  };
  const handlePrev = () => {
    setStep(1);
  };
  const steps = [
    { number: 1, label: "Service Details" },
    { number: 2, label: "Availability" },
    { number: 3, label: "Review & Publish" },
  ];

  const days = [
    { label: "Mon", active: true },
    { label: "Tue", active: true },
    { label: "Wed", active: true },
    { label: "Thu", active: true },
    { label: "Fri", active: true },
    { label: "Sat", active: false },
    { label: "Sun", active: false },
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
              {/* Working Days */}
              <div className="pb-6 border-b border-gray-100">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Working Days
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {days.map((day) => (
                    <button
                      key={day.label}
                      type="button"
                      className={`px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                        day.active
                          ? "bg-blue-600 text-white"
                          : "border border-gray-300 text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="pb-6 border-b border-gray-100">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Working Hours
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm text-gray-600 mb-1.5">
                      Start Time
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="9:00 AM"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Clock className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 mb-1.5">
                      End Time
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="6:00 PM"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Clock className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="pb-6 border-b border-gray-100">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Response Time
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Within 1 hour</option>
                    <option>Within 3 hours</option>
                    <option>Within 24 hours</option>
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
                    placeholder="e.g. Within 10 miles of your location"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Emergency Availability */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Emergency Availability
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Available for urgent same-day requests
                  </p>
                </div>
                <button
                  type="button"
                  className="relative w-11 h-6 rounded-full bg-blue-600 flex-shrink-0"
                >
                  <span className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-white shadow" />
                </button>
              </div>
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
            <button type="button" className="blue-btn" onClick={handleNext}>
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
