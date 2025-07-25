import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./App";           // or "./Portfolio" if your file is named Portfolio.jsx
import "./index.css";                    // import Tailwind styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
