import Navbar from "./Components/layout/Navbar/Navbar";
import Footer from "./Components/layout/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import axios from "axios";
import Dash from "./pages/Dashboard/Dash";
import Listings from "./pages/Listings/IndexListings/Listings";
import ListingDetails from "./pages/Listings/DetailedListing/ListingDetails";
import NewListing from "./pages/Listings/NewListing/NewListing";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import HowItWorks from "./Components/Working/HowItWorks";
import Loader from "./Components/ui/Loader";
import BookingCard from "./pages/Listings/DetailedListing/BookingCard";
import EditForm from "./pages/Listings/EditListing/EditForm";
import Favourites from "./pages/Listings/Favourites/Favourites";
import AllChats from "./pages/Chat/AllChats";
import ChatsIndex from "./pages/Chat/ChatsIndex";

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
    path: "/listings/favourites",
    element: (
      <>
        <Navbar />
        <Favourites />
      </>
    ),
  },

  {
    path: "/chats",
    element: (
      <>
        <Navbar />
        <ChatsIndex />
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
    path: "/booking",
    element: (
      <>
        <Navbar />
        <BookingCard />
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
  {
    path: "/listings/:id/edit",
    element: (
      <>
        <Navbar />
        <EditForm />
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
