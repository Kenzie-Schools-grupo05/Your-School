import { Route, Routes } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import Login from "../pages/Login";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};
export default RoutesMain;
