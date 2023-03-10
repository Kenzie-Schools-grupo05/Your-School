import { useContext, useEffect } from "react";
import { UserContext } from "../../Providers/UserContext";
import ClassCard from "../ClassCard";
import { MainDash, SelectClass } from "./style";

const Classeslist = () => {
  const { listClassRooms, classRoom } = useContext(UserContext);

  useEffect(() => {
    listClassRooms();
  }, []);

  return (
    <MainDash>
      <SelectClass>Turmas</SelectClass>
      <ul>
        {classRoom?.map((element) => {
          return <ClassCard name={element.class} key={element.class} />;
        })}
      </ul>
    </MainDash>
  );
};

export default Classeslist;
