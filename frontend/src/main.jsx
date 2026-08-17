import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ListingProvider } from "./Context/ListingContext.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { FetchingProvider } from "./Context/FetchingContext.jsx";
import { AlertProvider } from "./Context/AlertContext.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>

  <AuthProvider>
    <ListingProvider>
      <FilterProvider>
        <FetchingProvider>
          <AlertProvider>
            <App />
          </AlertProvider>
        </FetchingProvider>
      </FilterProvider>
    </ListingProvider>
  </AuthProvider>,
  //</StrictMode>,
);
