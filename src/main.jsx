import React from "react";
import ReactDOM from "react-dom/client";
import JournalApp from "./JournalApp.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <JournalApp />
    </Router>
  </React.StrictMode>
);
