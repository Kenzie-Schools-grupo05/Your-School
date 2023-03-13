import { useContext, useEffect } from "react"
import { UserContext } from "../../../Providers/UserContext"
import { ClassCardLi } from "./style"


interface iClassCard {
    name: string
}

function ClassCard({ name }: iClassCard) {
    const { getClassStudents, getNoClassStudents } = useContext(UserContext)

    return (
        <ClassCardLi>
            <h2>{name}</h2>

            <button id={name} onClick={() => getClassStudents(name)}>Ver Alunos</button>
            <button id={name} onClick={() => getNoClassStudents(name)} >Adicionar alunos à turma</button>
        </ClassCardLi>
    )
}

export default ClassCard