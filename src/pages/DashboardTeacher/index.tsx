import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Classeslist } from "../../components/TeacherClasses/ClassesList";
import { UserInfo } from "../../components/UserInfo";
import { UserContext } from "../../Providers/UserContext";

export const DashboardProfessor = () => {
  const { listClassRooms, classRoom, user } = useContext(UserContext);

  useEffect(() => {
    listClassRooms();
  }, []);

  return (
    <>
      <UserInfo name={user?.name} classRoom="Fundamental" />
      <Classeslist />
    </>
  );
};
