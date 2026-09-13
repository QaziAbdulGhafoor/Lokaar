const steps = [
  {
    number: 1,
    title: "Search a Service",
    description:
      "Find the right service you need from our wide range of options.",
    icon: (
      <svg
        className="w-7 h-7"
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
        className="w-7 h-7"
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
        className="w-7 h-7"
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
    <section
      className="border-y border-stone-200"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <div className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-sm font-medium text-stone-500 mb-6">
          How it works
        </h2>

        <div className="border border-stone-200 divide-y divide-stone-200 bg-white">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-5 sm:gap-8 px-5 sm:px-8 py-6"
            >
              <span
                className="text-4xl sm:text-5xl font-black leading-none shrink-0 select-none"
                style={{ color: "#E7E5E4" }}
              >
                {String(step.number).padStart(2, "0")}
              </span>
              <div className="flex items-start gap-4 min-w-0">
                <div className="mt-1 shrink-0" style={{ color: "#2563EB" }}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{step.title}</h3>
                  <p className="text-sm text-stone-600 mt-1 max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
