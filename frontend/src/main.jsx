import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ListingProvider } from "./Context/ListingContext.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <AuthProvider>
    <ListingProvider>
      <App />
    </ListingProvider>
  </AuthProvider>,
  //</StrictMode>,
);
