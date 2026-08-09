import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import axios from "axios";
import Dash from "./Components/Dashboards/dash";
import Listings from "./Components/Listings/Listings";
import ListingDetails from "./Components/Listings/ListingDetails";
import NewListing from "./Components/Listings/NewListing";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import HowItWorks from "./Components/Working/HowItWorks";
import Loader from "./Components/Listings/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Listings />
      </>
    ),
  },
  {
    path: "/load",
    element: (
      <>
        <Navbar />
        <Loader message="Creating Your Listing" />
      </>
    ),
  },

  {
    path: "/working",
    element: (
      <>
        <Navbar />
        <HowItWorks />
      </>
    ),
  },

  {
    path: "/listings",
    element: (
      <>
        <Navbar />
        <Listings />
      </>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dash />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/new",
    element: (
      <>
        <Navbar />
        <NewListing />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },

  {
    path: "/listings",
    element: (
      <>
        <Navbar />
        <Listings />
      </>
    ),
  },

  {
    path: "/listings/:id",
    element: (
      <>
        <Navbar />
        <ListingDetails />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
