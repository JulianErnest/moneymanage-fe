import React from "react";
import ReactDOM from "react-dom/client";

import AppNavigation from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppNavigation />
  </React.StrictMode>
);
