import { Route, Routes } from "react-router-dom";
import DashboardProfessor from "../pages/DashboardTeacher";
import Login from "../pages/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/teacher" element={<DashboardProfessor />} />
            <Route path="/" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;
