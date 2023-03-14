import { useContext } from "react";
import { iNewStudent, UserContext } from "../../../Providers/UserContext";
import { NewStudentCard } from "./style";

export const NewStudents = ({ name, grade, id }: iNewStudent) => {
  const { addStudentToClass } = useContext(UserContext);

  return (
    <NewStudentCard>
      <h2>{name}</h2>
      <button onClick={() => addStudentToClass(id, grade)}>
        Adicionar Aluno
      </button>
    </NewStudentCard>
  );
};
