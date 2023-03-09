import React, { useContext, useEffect, useState } from "react";


export const DashboardStudent = () => {
    const { schoolGrades, studentGrade, setStudentGrade } = useContext(useContext);
    useEffect(() => {
        schoolGrades()


    }, [])
    localStorage.getItem('@TOKEN')


    return (
        <>
            <p>Olá,{studentGrade?.name} </p>
            <p>studentGrade.type - 3º ano - Ensino Médio</p>

        </>

    )

}

