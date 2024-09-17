import React, { Children } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Auth from "./Pages/auth";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile/index.jsx";
import { useAppStore } from "./store";

const PrivateRoute = ({ Children }) => {
  const { userInfo } = useAppStore;
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? Children : <Navigate to="/home" />;
};

const AuthRoute = ({ Children }) => {
  const { userInfo } = useAppStore;
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? <Navigate to="/courses" /> : Children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="/chatroom"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        {/* <Route path="/codelab" element={<CodeLab/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
