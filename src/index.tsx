import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthProvider } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
