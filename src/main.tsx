import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// @ts-expect-error CSS imports are handled by the bundler.
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);