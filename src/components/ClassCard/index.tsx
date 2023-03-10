import { ClassCardLi } from "./style"


interface iClassCard {
    name: string
}

function ClassCard({ name }: iClassCard) {
    return (
        <ClassCardLi>
            <h2>{name}</h2>

            <button>Ver Alunos</button>
        </ClassCardLi>
    )
}

export default ClassCard