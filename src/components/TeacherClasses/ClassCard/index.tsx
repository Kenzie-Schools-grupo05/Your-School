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

            <div>
            <button id={name} onClick={() => getClassStudents(name)}>Ver Alunos</button>
            <button id={name} onClick={() => getNoClassStudents(name)} >Adicionar alunos</button>
            </div>
        </ClassCardLi>
    )
}

export default ClassCard