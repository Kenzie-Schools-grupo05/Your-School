import React, { useContext, useEffect, useState } from "react";
import { iUser, UserContext } from "../../Providers/UserContext";
import logoBoletim from "../../assets/logoBoletim.png";

import { StyledDivGrade } from "./style";

interface iGradeParent {
  disabled: boolean;
  selectedChild: iUser | null | undefined;
}

export const GradeParent = ({ disabled, selectedChild }: iGradeParent) => {

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
    <>
      {selectedChild ? (
        <StyledDivGrade>
          <h2>Boletim</h2>
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
              {selectedChild?.grades?.mathematics.map((grade) => (
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
                  selectedChild?.grades?.mathematics
                    ? isApproved(selectedChild?.grades?.mathematics)
                    : ""
                }
              />
            </li>
            <li>
              <span className="spanDiscipline">Português</span>
              {selectedChild?.grades?.portuguese.map((grade) => (
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
                  selectedChild?.grades?.portuguese
                    ? isApproved(selectedChild?.grades?.portuguese)
                    : ""
                }
              />
            </li>
            <li>
              <span className="spanDiscipline">História</span>
              {selectedChild?.grades?.history.map((grade) => (
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
                  selectedChild?.grades?.history
                    ? isApproved(selectedChild?.grades?.history)
                    : ""
                }
              />
            </li>
            <li>
              <span className="spanDiscipline">Geografia</span>
              {selectedChild?.grades?.geography.map((grade) => (
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
                  selectedChild?.grades?.geography
                    ? isApproved(selectedChild?.grades?.geography)
                    : ""
                }
              />
            </li>
            <li>
              <span className="spanDiscipline">Ciências</span>
              {selectedChild?.grades?.sciences.map((grade) => (
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
                  selectedChild?.grades?.sciences
                    ? isApproved(selectedChild?.grades?.sciences)
                    : ""
                }
              />
            </li>
            <li>
              <span className="spanDiscipline">Artes</span>
              {selectedChild?.grades?.art.map((grade) => (
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
                  selectedChild?.grades?.art
                    ? isApproved(selectedChild?.grades?.art)
                    : ""
                }
              />
            </li>
            <li>
              <span className="spanDiscipline">Educação Física</span>
              {selectedChild?.grades?.physicalEducation.map((grade) => (
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
                  selectedChild?.grades?.physicalEducation
                    ? isApproved(selectedChild?.grades?.physicalEducation)
                    : ""
                }
              />
            </li>
          </ul>
        </StyledDivGrade>
      ) : null}
    </>
  );
};
