import "./global/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { LoadingProvider } from "./Context/LoginContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);
