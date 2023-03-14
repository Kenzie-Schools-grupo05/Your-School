import { useContext } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../Providers/UserContext";
import { DashboardParent } from "../DashboardParent";
import { DashboardStudent } from "../DashboardStudent";
import { DashboardProfessor } from "../DashboardTeacher";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  const renderSwitch = (type: string | undefined) => {
    switch (type) {
      case "student":
        return <DashboardStudent />;
      case "parent":
        return <DashboardParent />;
      case "professor":
        return <DashboardProfessor />;
    }
  };

  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? <Loader /> : null}
      <Header />
      {renderSwitch(user?.type)}
    </>
  );
};
