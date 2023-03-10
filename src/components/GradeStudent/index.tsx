import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import logoBoletim from "../../assets/logoBoletim.png";

import { StyledDivGrade } from "./style";

interface iGradeStudent {
  disabled: boolean;
}

export const GradeStudent = ({ disabled }: iGradeStudent) => {
  const { schoolGrades, studentGrade } = useContext(UserContext);
  const tokenLS = localStorage.getItem("@TOKEN");

  useEffect(() => {
    // schoolGrades(studentGrade.id);
    schoolGrades(4);
  }, []);

  const isApproved = (subject: string[]) => {
    const total = subject.reduce((acc, currentValue) => {
      return Number(acc) + Number(currentValue);
    }, 0);
    const average = total / 3;
    if (average >= 50) {
      return "Sim";
    } else {
      return "Não";
    }
  };

  return (
    <StyledDivGrade>
      <img src={logoBoletim} />
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
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.mathematics
                ? isApproved(studentGrade?.grades?.mathematics)
                : ""
            }
          />
        </li>
        <li>
          <span className="spanDiscipline">Português</span>
          {studentGrade?.grades?.portuguese.map((grade) => (
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.portuguese
                ? isApproved(studentGrade?.grades?.portuguese)
                : ""
            }
          />
        </li>
        <li>
          <span className="spanDiscipline">História</span>
          {studentGrade?.grades?.history.map((grade) => (
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.history
                ? isApproved(studentGrade?.grades?.history)
                : ""
            }
          />
        </li>
        <li>
          <span className="spanDiscipline">Geografia</span>
          {studentGrade?.grades?.geography.map((grade) => (
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.geography
                ? isApproved(studentGrade?.grades?.geography)
                : ""
            }
          />
        </li>
        <li>
          <span className="spanDiscipline">Ciências</span>
          {studentGrade?.grades?.sciences.map((grade) => (
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.sciences
                ? isApproved(studentGrade?.grades?.sciences)
                : ""
            }
          />
        </li>
        <li>
          <span className="spanDiscipline">Artes</span>
          {studentGrade?.grades?.art.map((grade) => (
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.art
                ? isApproved(studentGrade?.grades?.art)
                : ""
            }
          />
        </li>
        <li>
          <span className="spanDiscipline">Educação Física</span>
          {studentGrade?.grades?.physicalEducation.map((grade) => (
            <input
              disabled={disabled}
              className="spanGrade"
              defaultValue={grade}
              key={crypto.randomUUID()}
            />
          ))}
          <input
            disabled
            className="spanGrade"
            defaultValue={
              studentGrade?.grades?.physicalEducation
                ? isApproved(studentGrade?.grades?.physicalEducation)
                : ""
            }
          />
        </li>
      </ul>
    </StyledDivGrade>
  );
};
