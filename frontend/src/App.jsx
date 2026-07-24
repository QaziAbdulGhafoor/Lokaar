import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import axios from "axios";

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
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
]);
function App() {
  const getData = async () => {
    const data = await axios.get("http://localhost:3000/listings");
    console.log(data);
  };

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
