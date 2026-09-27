// Starts React inside the root element in index.html.
// App contains the page. These wrappers provide routing and saved theme state.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App.jsx";
import "./index.css";

// Keep root in sync with index.html. StrictMode helps find problems during development.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
