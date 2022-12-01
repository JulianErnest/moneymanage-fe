import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./context/UserContext";

import AppNavigation from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  </React.StrictMode>
);
