import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/keyboard_tapuri">
      <App />
    </BrowserRouter>
  </StrictMode>
);

// #0a0a0a black
// #1c1c1c half-black
// #aa1d26; red
// https://dribbble.com/shots/25171733-Osool-Training-and-Consultation-Center
