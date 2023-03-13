import { useContext } from "react";
import { iUser, UserContext } from "../../../Providers/UserContext";
import { StudentCardLi } from "./style";

interface iStudent {
  name: string;
  id: number;
  student: iUser
}

const StudentCard = ({ name, student }: iStudent) => {
  const { showStudentGrade } = useContext(UserContext)

  return (
    <StudentCardLi>
      <h2>{name}</h2>

      <div>
        <button className="editBtn" onClick={() => showStudentGrade(student)}>Editar</button>
        <button className="deleteBtn">Deletar</button>
      </div>
    </StudentCardLi>
  );
};

export default StudentCard;
