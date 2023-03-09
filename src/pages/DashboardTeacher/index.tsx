import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Classeslist from "../../components/TeacherClasses/ClassesList";
import UserInfo from "../../components/UserInfo";
import { UserContext } from "../../Providers/UserContext";

const DashboardProfessor = () => {
  const { listClassRooms, classRoom } = useContext(UserContext);

  useEffect(() => {
    listClassRooms();
  }, []);

  return (
    <>
      <Header />
      <UserInfo name="Cláudia" classRoom="2° ano ensino médio" />
      <Classeslist />
    </>
  );
};

export default DashboardProfessor;
