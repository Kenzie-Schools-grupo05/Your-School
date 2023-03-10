import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userToken = localStorage.getItem("@TOKEN");

  return userToken ? <Outlet /> : <Navigate to="/" />;
};
