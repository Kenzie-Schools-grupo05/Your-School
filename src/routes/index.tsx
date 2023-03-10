import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
<<<<<<< HEAD
import { ProtectedRoutes } from "./protectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={"login"} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
=======
import DashboardProfessor from "../pages/DashboardTeacher";
import Login from "../pages/Login";
import { Register } from "../pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teacher" element={<DashboardProfessor />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
        </Routes>
    );
>>>>>>> d2af81548ea43ad1ac81a45ee16a9f7b6c30984a
};

export default AppRoutes;
