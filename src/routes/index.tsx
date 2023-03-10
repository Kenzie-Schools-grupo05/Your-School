import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
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
};

export default AppRoutes;
