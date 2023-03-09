import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import DashboardProfessor from "../pages/DashboardTeacher";
import Login from "../pages/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/teacher" element={<DashboardProfessor />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;
