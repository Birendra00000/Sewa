import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContext from "./context/MainContext.jsx";
import AuthProvider from "./context/authentication/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MainContext>
        <App />
      </MainContext>
    </AuthProvider>
  </StrictMode>
);
