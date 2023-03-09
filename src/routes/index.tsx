import { Route, Routes } from "react-router-dom";
import DashboardProfessor from "../pages/DashboardTeacher";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/teacher" element={<DashboardProfessor />} />
            <Route path="/login" element={"login"} />
        </Routes>
    );
};

export default AppRoutes;
