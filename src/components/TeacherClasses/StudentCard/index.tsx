import { useContext } from "react";
import { iUser, UserContext } from "../../../Providers/UserContext";
import { StudentCardLi } from "./style";

interface iStudent {
  name: string;
  id: number | undefined;
  student: iUser
}

const StudentCard = ({ name, student, id }: iStudent) => {
  const { showStudentGrade, deleteStudent } = useContext(UserContext)

  return (
    <StudentCardLi>
      <h2>{name}</h2>

      <div>
        <button className="editBtn" onClick={() => showStudentGrade(student)}>Editar</button>
        <button className="deleteBtn" onClick={() => deleteStudent(id)}>Deletar</button>
      </div>
    </StudentCardLi>
  );
};

export default StudentCard;
