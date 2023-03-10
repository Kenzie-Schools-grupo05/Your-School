import {useContext} from 'react';

import Header from "../../components/Header";
import { UserContext } from "../../Providers/UserContext";
import { DashboardParent } from "../DashboardParent";
import { DashboardStudent } from '../DashboardStudent';
import DashboardProfessor from "../DashboardTeacher"

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  //Switch case para definir o que vai ser renderizado
  const renderSwitch = (type : string | undefined) => {
    switch(type) {
      case "student": return <DashboardStudent />;
      case "parent": return <DashboardParent />;
      case "professor": return <DashboardProfessor />;
    }
  }

  return (
    <>
      <Header />
      {renderSwitch(user?.type)}
    </>
  );
};
