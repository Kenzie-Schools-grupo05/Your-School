import React, { useContext, useEffect, useState } from "react";
import { Grades } from "../../components/Grades";
import { UserContext } from "../../Providers/UserContext";


export const DashboardStudent = () => {
    const { user, schoolGrades, studentGrade } = useContext(UserContext);
    useEffect(() => {
        schoolGrades(1)
        // schoolGrades(user.id)
    }, [])

    localStorage.getItem('@TOKEN')


    return (
        <>
            <p>Olá,{studentGrade?.name} </p>
            <p>studentGrade.type - 3º ano - Ensino Médio</p>
            <Grades disabled={true} selectedChild={studentGrade} />
        </>
    )

}

