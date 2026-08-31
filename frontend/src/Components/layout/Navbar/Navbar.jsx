import React, { useContext, useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { FilterContext } from "../../../Context/FilterContext";
import api from "../../../API/api";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  const { setFilters } = useContext(FilterContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

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

  const firstLetter = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "U";

  // Close user dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                to="/new"
                className="text-gray-500 no-underline transition hover:text-gray-900"
              >
                Become A Provider
              </Link>
            </div>

            {/* Authentication */}
            {user ? (
              <div
                className="relative mr-4 flex items-center gap-4"
                ref={userMenuRef}
              >
                {/* User dropdown trigger */}
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-gray-50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {firstLetter}
                  </span>
                  <span className="text-gray-700">{user.username}</span>
                </button>

                {/* Dropdown panel */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-12 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                    <div className="border-b border-gray-100 px-4 py-3">
                      <p className="font-medium text-gray-900">
                        {user.username}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <div className="py-1">
                      {user.category === "provider" && (
                        <Link
                          to="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-gray-700 no-underline transition hover:bg-gray-50"
                        >
                          Dashboard
                        </Link>
                      )}

                      <Link
                        to="/chats"
                        onClick={() => setUserMenuOpen(false)}
                        className="block px-4 py-2 text-gray-700 no-underline transition hover:bg-gray-50"
                      >
                        Chats
                      </Link>

                      {user.category === "customer" && (
                        <Link
                          to="/listings/favourites"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-gray-700 no-underline transition hover:bg-gray-50"
                        >
                          Favourites
                        </Link>
                      )}
                    </div>

                    <div className="border-t border-gray-100 pt-1">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-red-600 transition hover:bg-gray-50"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
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
                  to="/new"
                  onClick={closeMobileMenu}
                  className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                >
                  Become A Provider
                </Link>

                {user ? (
                  <>
                    <div className="flex items-center gap-3 border-b border-gray-100 py-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {firstLetter}
                      </span>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.username}
                        </p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    {user.category === "provider" && (
                      <Link
                        to="/dashboard"
                        onClick={closeMobileMenu}
                        className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                      >
                        Dashboard
                      </Link>
                    )}

                    <Link
                      to="/chats"
                      onClick={closeMobileMenu}
                      className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                    >
                      Chats
                    </Link>

                    {user.category === "customer" && (
                      <Link
                        to="/listings/favourites"
                        onClick={closeMobileMenu}
                        className="border-b border-gray-100 py-3 text-gray-600 no-underline transition hover:text-gray-900"
                      >
                        Favourites
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
