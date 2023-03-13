import React, { useContext, useEffect, useState } from "react";
import { Grades } from "../../components/Grades";
import { UserContext } from "../../Providers/UserContext";
import {StyledDivDashboardStudent} from "./style"


export const DashboardStudent = () => {
    const { user, schoolGrades, studentGrade } = useContext(UserContext);
    console.log(studentGrade)



    
    useEffect(() => {
        
        schoolGrades(user?.id)
    }, [])

    localStorage.getItem('@TOKEN')


    return (
        <StyledDivDashboardStudent>
                  <section id="user__infos">
        <div>
          <h2>Olá, {studentGrade?.name}</h2>
          <p>Perfil do aluno</p>
        </div>
      </section>
            <Grades disabled={true} selectedChild={studentGrade} />
        </StyledDivDashboardStudent>
    )

}

