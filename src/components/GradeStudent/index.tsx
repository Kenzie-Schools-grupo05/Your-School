import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import logoBoletim from "../../assets/logoBoletim.png"

import { StyledDivGrade } from "./style";

export const GradeStudent = () => {
  const { schoolGrades, studentGrade } =
    useContext(UserContext);
    const tokenLS = localStorage.getItem('@TOKEN');

  useEffect(() => {
    schoolGrades(studentGrade.id);
  }, []);

  return (
    <StyledDivGrade>
      <img src={logoBoletim}/>.
      <ul>
        <li>
          <span className="spanTitle">Matéria</span>
          <span className="spanTitle">1ª Trimestre</span>
          <span className="spanTitle">2ª Trimestre</span>
          <span className="spanTitle">3ª Trimestre</span>
          <span className="spanTitle">Aprovado</span>
        </li>
        <li>
          <span className="spanDiscipline">Matemática</span>
          {studentGrade?.grades?.mathematics.map((grade) => (
            <span className="spanGrade" key={studentGrade.id}>
              {grade}
            </span>
          ))}
        </li>
        <li>
          <span className="spanDiscipline">Português</span>
          {studentGrade?.grades?.portuguese.map((grade) => (
            <span className="spanGrade"  key={studentGrade.id}>
              {grade}
            </span>
          ))}
        </li>
        <li>
          <span className="spanDiscipline">História</span>
          {studentGrade?.grades?.history.map((grade) => (
            <span className="spanGrade" key={crypto.randomUUID()}>
              {grade}
            </span>
          ))}
        </li>
        <li>
          <span className="spanDiscipline">Geografia</span>
          {studentGrade?.grades?.portuguese.map((grade) => (
            <span className="spanGrade" key={crypto.randomUUID()}>
              {grade}
            </span>
          ))}
        </li>
        <li>
          <span className="spanDiscipline">Ciências</span>
          {studentGrade?.grades?.sciences.map((grade) => (
            <span className="spanGrade" key={crypto.randomUUID()}>
              {grade}
            </span>
          ))}
        </li>
        <li>
          <span className="spanDiscipline">Artes</span>
          {studentGrade?.grades?.art.map((grade) => (
            <span className="spanGrade" key={crypto.randomUUID()}>
              {grade}
            </span>
          ))}
        </li>
        <li>
          <span className="spanDiscipline">Educação Física</span>
          {studentGrade?.grades?.physicalEducation.map((grade) => (
            <span className="spanGrade" key={crypto.randomUUID()}>
              {grade}
            </span>
          ))}
        </li>
      </ul>
    </StyledDivGrade>
  );
};
