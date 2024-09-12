import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import Courses from "./Pages/Courses";
import Auth from "./Pages/auth";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/chatroom" element={<Chat/>} />
        {/* <Route path="/codelab" element={<CodeLab/>} /> */}
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<Navigate to="/home"/>} />     
      </Routes>
    </Router>
  </React.StrictMode>
);
