import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import axios from "axios";
import Listings from "./Components/Listings/Listings";
import ListingDetails from "./Components/Listings/ListingDetails";
import NewListing from "./Components/Listings/NewListing";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
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
  const myUser = useContext(AuthContext);
  console.log(myUser);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
