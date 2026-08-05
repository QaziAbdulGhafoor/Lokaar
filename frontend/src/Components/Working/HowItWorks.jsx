const steps = [
  {
    number: 1,
    title: "Search a Service",
    description:
      "Find the right service you need from our wide range of options.",
    icon: (
      <svg
        className="w-9 h-9 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle
          cx="11"
          cy="11"
          r="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Choose a Professional",
    description: "View profiles, ratings, and reviews to pick the best match.",
    icon: (
      <svg
        className="w-9 h-9 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle
          cx="12"
          cy="8"
          r="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 20c0-4 3.5-7 8-7s8 3 8 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Book & Get It Done",
    description: "Schedule your booking and relax while we get it done.",
    icon: (
      <svg
        className="w-9 h-9 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="3"
          y1="10"
          x2="21"
          y2="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="2"
          x2="8"
          y2="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="16"
          y1="2"
          x2="16"
          y2="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          How It Works
        </h2>
        <p className="mt-3 text-gray-500 text-base sm:text-lg">
          Book a professional in 3 simple steps
        </p>

        {/* Circles + connector row — desktop only */}
        <div className="hidden md:flex items-center mt-16 px-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-center flex-1 last:flex-none"
            >
              <div className="w-16 h-16 shrink-0 rounded-full border-2 border-blue-600 bg-blue-50 flex items-center justify-center text-2xl font-bold text-blue-700">
                {step.number}
              </div>
              {index !== steps.length - 1 && (
                <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2" />
              )}
            </div>
          ))}
        </div>

        {/* Content row — desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="mt-2">{step.icon}</div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-[260px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked, no connector lines */}
        <div className="flex md:hidden flex-col items-center gap-12 mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-blue-600 bg-blue-50 flex items-center justify-center text-2xl font-bold text-blue-700">
                {step.number}
              </div>
              <div className="mt-6">{step.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 max-w-[260px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
