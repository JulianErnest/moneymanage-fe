import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./context/UserContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import AppNavigation from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AppNavigation />
      </LocalizationProvider>
    </UserProvider>
  </React.StrictMode>
);
