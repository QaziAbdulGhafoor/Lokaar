import { useState, useEffect, useContext } from "react";
import api from "../../API/api";
import { AlertContext } from "../../Context/AlertContext";
import ShowAlert from "../Listings/ShowAlert";

const CheckCircle = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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

const XCircle = ({ className }) => (
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
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const DollarSign = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const tabs = [
  { key: "pending", label: "Pending" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

export default function ProviderDashboard() {
  const { alert, setAlert } = useContext(AlertContext);

  const [dashboardData, setDashboardData] = useState({
    pending: [],
    completed: [],
    cancelled: [],
    earnings: 0,
  });
  const [activeTab, setActiveTab] = useState("pending");
  const [isLoading, setIsLoading] = useState(true);
  const [chat, setChat] = useState(null);
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard", {
          credentials: "include",
        });

        const data = res.data;
        console.log(data);
        setDashboardData({
          pending: data.Pending || [],
          completed: data.Completed || [], // matches backend's current typo
          cancelled: data.Cancelled || [],
          earnings: data.earnings || 0,
        });
      } catch (err) {
        console.error("Failed to load dashboard:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  const stats = [
    {
      label: "Pending",
      count: dashboardData.pending.length,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      label: "Completed",
      count: dashboardData.completed.length,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      label: "Cancelled",
      count: dashboardData.cancelled.length,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
    },
    {
      label: "Earnings",
      count: `PKR ${dashboardData.earnings.toLocaleString()}`,
      icon: DollarSign,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
  ];

  const activeBookings = dashboardData[activeTab] || [];

  const statusPill = (status) => {
    const styles = {
      pending: "bg-amber-50 text-amber-700 border-amber-200",
      completed: "bg-green-50 text-green-700 border-green-200",
      cancelled: "bg-red-50 text-red-700 border-red-200",
    };
    return styles[status] || styles.pending;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  const markAsDone = async (id) => {
    const res = await api.patch(`/booking/${id}`, { status: "completed" });
    if (res.status === 200) {
      window.location.reload();
    } else {
      setAlert({ type: "red", message: "something went wrong" });
    }
  };

  const cancelBooking = async (id) => {
    const res = await api.patch(`/booking/${id}`, { status: "cancelled" });
    if (res.status === 200) {
      window.location.reload();
    } else {
      setAlert({ type: "red", message: "something went wrong" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      {alert.type !== "" ? (
        <ShowAlert message={alert.message} type={alert.type} />
      ) : (
        <></>
      )}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Overview of your bookings and earnings
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`bg-white rounded-xl border ${stat.border} p-5 flex items-start justify-between`}
              >
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.count}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bookings section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 px-4 sm:px-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label} ({dashboardData[tab.key]?.length || 0})
              </button>
            ))}
          </div>

          {/* Booking list */}
          <div className="p-4 sm:p-6">
            {activeBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-sm">No {activeTab} bookings</p>
              </div>
            ) : (
              <div className="space-y-3">
                {activeBookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {booking.customer.username || "Customer"}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {booking.service || "Service"} · {booking.date}{" "}
                        {booking.time && `at ${booking.time}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {booking.amount != null && (
                        <span className="text-sm font-semibold text-gray-900">
                          PKR {booking.amount}
                        </span>
                      )}
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusPill(activeTab)}`}
                      >
                        {tabs.find((t) => t.key === activeTab)?.label}
                      </span>
                      {activeTab === "pending" ? (
                        <>
                          <button
                            onClick={() => {
                              markAsDone(booking._id);
                            }}
                            className=" bg-green-600 text-white rounded-full cursor-pointer h-8 w-8 hover:bg-green-700"
                          >
                            <span className="material-symbols-outlined mt-1">
                              check_circle
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              cancelBooking(booking._id);
                            }}
                            className=" bg-red-600 text-white rounded-full cursor-pointer h-8 w-8 hover:bg-red-700"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
