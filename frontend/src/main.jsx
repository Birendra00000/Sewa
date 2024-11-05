import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContext from "./context/MainContext.jsx";
import AuthProvider from "./context/authentication/AuthContext.jsx";
import ThemeProvider from "./context/authentication/themeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <MainContext>
          <App />
        </MainContext>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
