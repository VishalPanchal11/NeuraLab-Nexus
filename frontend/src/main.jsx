import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import App from "./App.jsx";
import { Toaster } from "./components/ui/sonner";
import { SocketProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <App />
    <Toaster />
  </SocketProvider>
);
