import React from "react";
import ReactDOM from "react-dom/client";
import JournalApp from "./JournalApp.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <JournalApp />
      </Router>
    </Provider>
  </React.StrictMode>
);
