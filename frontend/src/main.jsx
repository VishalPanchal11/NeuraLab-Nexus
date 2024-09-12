import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import Courses from "./Pages/Courses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Courses/>
    </Router>
  </React.StrictMode>
);
