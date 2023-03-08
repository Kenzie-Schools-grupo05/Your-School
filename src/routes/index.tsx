import { Route, Routes } from "react-router-dom";
import DashboardProfessor from "../pages/DashboardTeacher";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={"login"} />
      <Route path="/register" element={"register"} />
      <Route path="/dashboard" element={<DashboardProfessor />} />
    </Routes>
  );
};

export default AppRoutes;
