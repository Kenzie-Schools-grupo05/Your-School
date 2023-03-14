import { useContext, useEffect } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Grades } from "../Grades";
import { ClassCard } from "./ClassCard";
import { NewStudents } from "./NewStudents";
import { StudentCard } from "./StudentCard";
import { MainDash, SelectClass } from "./style";

export const Classeslist = () => {
  const {
    listClassRooms,
    classRoom,
    showClasses,
    showClassesBtn,
    hideClassesBtn,
    showStudents,
    students,
    studentGrade,
    showNewStudents,
    newClass,
    newStudents,
  } = useContext(UserContext);

  useEffect(() => {
    listClassRooms();
  }, []);

  return (
    <MainDash>
      <SelectClass
        onClick={() => {
          showClasses ? hideClassesBtn() : showClassesBtn();
        }}
      >
        {showClasses ? "Ocultar Turmas" : "Mostrar Turmas"}
      </SelectClass>
      <ul>
        {showClasses && !showStudents
          ? classRoom?.map((element) => {
              return <ClassCard name={element.class} key={element.class} />;
            })
          : null}

        {!showClasses && showStudents
          ? students?.map((student) => {
              return (
                <StudentCard
                  name={student.name}
                  id={student.id}
                  student={student}
                  key={student.id}
                />
              );
            })
          : null}
        {studentGrade && !showStudents && !showClasses ? (
          <Grades disabled={false} selectedChild={studentGrade} />
        ) : null}

        {showNewStudents && !studentGrade && !showStudents && !showClasses
          ? newStudents?.map((student) => {
              return (
                <NewStudents
                  grade={newClass}
                  name={student.name}
                  id={student.id}
                  key={student.id}
                />
              );
            })
          : null}
      </ul>
    </MainDash>
  );
};
