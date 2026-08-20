// import React, { useContext } from "react";
// import logo from "../../assets/logo.png";
// import "./Navbar.css";
// import "../../App.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";
// import { FilterContext } from "../../Context/FilterContext";
// import { AlertContext } from "../../Context/AlertContext";
// import api from "../../API/api";

// const Navbar = () => {
//   const { user, loading } = useContext(AuthContext);
//   const { setFilters } = useContext(FilterContext);
//   const { alert, setAlert } = useContext(AlertContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     api.post("/logout");

//     window.location.reload();
//   };

//   const removeFilters = () => {
//     setFilters(null);
//   };

//   return (
//     <div className="navbar position: sticky top-0 bg-white hidden md:block">
//       {loading ? (
//         <p>...loading</p>
//       ) : (
//         <>
//           <div className="logo">
//             <li>
//               <img src={logo} alt="" className="logo ml-6" />
//             </li>
//           </div>
//           <div className="services">
//             <li>
//               <Link to="/listings" onClick={removeFilters}>
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/working">How It Works</Link>
//             </li>
//             <li>
//               <Link to="/new">Become A Provider</Link>
//             </li>
//           </div>

//           {user ? (
//             <div className="registers">
//               {user.category === "provider" ? (
//                 <li>
//                   <Link to="/dashboard">Dashboard</Link>
//                 </li>
//               ) : (
//                 <></>
//               )}

//               <li>
//                 <button className="blue-btn" onClick={handleLogout}>
//                   Log Out
//                 </button>
//               </li>
//             </div>
//           ) : (
//             <div className="registers">
//               <li>
//                 <Link to="/login">Log In</Link>
//               </li>
//               <li>
//                 <Link to="/signup">
//                   <button className="blue-btn">Sign Up</button>
//                 </Link>
//               </li>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FilterContext } from "../../Context/FilterContext";
import api from "../../API/api";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  const { setFilters } = useContext(FilterContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    api.post("/logout");
    window.location.reload();
  };

  const removeFilters = () => {
    setFilters(null);
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white font-[Inter,sans-serif] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {loading ? (
        <div className="flex h-16 items-center justify-center">
          <p>...loading</p>
        </div>
      ) : (
        <>
          {/* ================= DESKTOP NAVBAR ================= */}
          <div className="hidden h-16 items-center justify-between md:flex">
            {/* Logo */}
            <Link to="/listings" onClick={removeFilters}>
              <img
                src={logo}
                alt="Logo"
                className="ml-6 h-12 w-auto object-contain"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link
                to="/listings"
                onClick={removeFilters}
                className="text-gray-500 no-underline transition hover:text-gray-900"
              >
                Services
              </Link>

              <Link
                to="/working"
                className="text-gray-500 no-underline transition hover:text-gray-900"
              >
                How It Works
              </Link>

              <Link
                to="/new"
                className="text-gray-500 no-underline transition hover:text-gray-900"
              >
                Become A Provider
              </Link>
            </div>

            {/* Authentication */}
            {user ? (
              <div className="mr-4 flex items-center gap-3">
                {user.category === "provider" && (
                  <Link
                    to="/dashboard"
                    className="text-gray-500 no-underline transition hover:text-gray-900"
                  >
                    Dashboard
                  </Link>
                )}

                {user.category === "customer" && (
                  <Link
                    to="/listings/favourites"
                    className="text-gray-500 no-underline transition hover:text-gray-900"
                  >
                    Favourites
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="mr-4 flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-gray-500 no-underline transition hover:text-gray-900"
                >
                  Log In
                </Link>

                <Link to="/signup">
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* ================= MOBILE NAVBAR ================= */}
          <div className="flex h-16 items-center justify-between px-4 md:hidden">
            {/* Logo */}
            <Link to="/listings" onClick={removeFilters}>
              <img src={logo} alt="Logo" className="h-auto max-w-[140px]" />
            </Link>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                // X icon
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
              ) : (
                // Hamburger icon
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 md:hidden">
              <div className="flex flex-col">
                <Link
                  to="/listings"
                  onClick={removeFilters}
                  className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                >
                  Services
                </Link>

                <Link
                  to="/working"
                  onClick={closeMobileMenu}
                  className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                >
                  How It Works
                </Link>

                <Link
                  to="/new"
                  onClick={closeMobileMenu}
                  className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                >
                  Become A Provider
                </Link>

                {user ? (
                  <>
                    {user.category === "provider" && (
                      <Link
                        to="/dashboard"
                        onClick={closeMobileMenu}
                        className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                      >
                        Dashboard
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="mt-3 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                    >
                      Log In
                    </Link>

                    <Link
                      to="/signup"
                      onClick={closeMobileMenu}
                      className="mt-3"
                    >
                      <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                        Sign Up
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
