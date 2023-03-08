import {useContext} from 'react';

import Header from "../../components/Header";
import { UserContext } from "../../Providers/UserContext";
import { DashboardParent } from "../DashboardParent";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      {/* {user?.type === "student" ? <DashboardStudent /> : null} */}
      {/* {user?.type === "parent" ? <DashboardParent /> : null} */}
      <DashboardParent />
      {/* {user?.type === "professor" ? <DashboardProfessor /> : null} */}
    </>
  );
};
