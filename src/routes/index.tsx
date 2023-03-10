import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
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
};

export default AppRoutes;
