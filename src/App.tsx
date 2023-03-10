import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GradeStudent } from "./components/GradeStudent";

import { DashboardParent } from "./pages/DashboardParent";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <AppRoutes />
      <GradeStudent />
    </div>
  );
}

export default App;
