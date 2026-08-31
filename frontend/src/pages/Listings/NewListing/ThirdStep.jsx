import { useContext, useState } from "react";
import { ListingContext } from "../../Context/ListingContext";
import { AuthContext } from "../../Context/AuthContext";
import Loader from "../../Components/Listings/Loader";
import api from "../../API/api";

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ThirdStep({ setStep }) {
  const { listing } = useContext(ListingContext);
  const { user } = useContext(AuthContext);
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePrev = () => setStep(2);

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      const data = new FormData();
      data.append("title", listing.title);
      data.append("about", listing.about);
      data.append("profession", listing.profession);
      data.append("price", listing.price);
      data.append("responseTime", listing.responseTime);
      data.append("availability", JSON.stringify(listing.availability));
      data.append("location", listing.location);
      data.append("avatar", listing.avatar);

      const response = await api.post("/listings", data, {
        credentials: "include",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsPublishing(false);
    }
  };

  // const handlePublish = async () => {
  //   try {
  //     // adjust endpoint/method to match your actual API setup
  //     const res = await fetch("/api/listings", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify(listing),
  //     });
  //     if (!res.ok) throw new Error("Failed to publish listing");
  //     const data = await res.json();
  //     console.log("Published:", data);
  //     // navigate or show success state here
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const formatAvailability = () => {
    const availability = listing.availability;
    if (!availability?.days?.length) return "No availability set";

    const selectedDays = [...availability.days]
      .sort((a, b) => a - b)
      .map((d) => dayLabels[d])
      .join(", ");

    return `${selectedDays} · ${availability.startTime} – ${availability.endTime}`;
  };

  const responseTimeLabel = (val) => {
    if (val === 1) return "Within 1 hour";
    if (val === 3) return "Within 3 hours";
    if (val === 24) return "Within 24 hours";
    return "Not set";
  };

  const steps = [
    { number: 1, label: "Service Details" },
    { number: 2, label: "Availability" },
    { number: 3, label: "Review & Publish" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {isPublishing && <Loader message="Publishing your listing..." />}
      {/* Step indicator */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto flex items-center justify-between sm:justify-center sm:gap-0">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="flex items-center flex-1 last:flex-none"
            >
              <div className="flex flex-col items-center text-center flex-shrink-0">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold ${
                    step.number === 3
                      ? "bg-blue-600 text-white"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`mt-2 text-xs sm:text-sm font-medium whitespace-nowrap ${
                    step.number === 3 ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 sm:mx-4 mt-[-20px] sm:mt-[-24px] border-t-2 border-dashed border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Review card */}
      <div className="flex-1 px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-8 space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Review & Publish
              </h1>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Double check everything before your listing goes live
              </p>
            </div>

            {/* Service Details */}
            <div className="pb-6 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Service Details
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {listing.title || "Untitled listing"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {listing.profession || "No category selected"}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {listing.about || "No description added"}
              </p>
            </div>

            {/* Pricing */}
            {listing.price && (
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Pricing
                </p>
                <p className="text-sm text-gray-600">
                  {listing.price ? `PKR ${listing.price}` : "No pricing set"}
                </p>
              </div>
            )}

            {/* Location */}
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Location
              </p>
              <p className="text-sm text-gray-600">
                {listing.location?.address ||
                  listing.location ||
                  "No location set"}
              </p>
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
            <button type="button" className="blue-btn" onClick={handlePublish}>
              Publish Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
