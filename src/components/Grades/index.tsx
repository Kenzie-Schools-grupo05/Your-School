import React, { useContext, useEffect, useState } from "react";
import { iUser, UserContext } from "../../Providers/UserContext";
import logoBoletim from "../../assets/logoBoletim.png";

import {  StyledDivGradeMobile, StylesDivFirstMobile } from "./style";

interface iGradeParent {
  disabled: boolean;
  selectedChild: iUser | null | undefined;
}

export const Grades = ({ disabled, selectedChild }: iGradeParent) => {
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
    
      <StylesDivFirstMobile>
        {selectedChild ? (
          <StyledDivGradeMobile>
            <h2>Boletim</h2>

            <ul>
              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">Matemática</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.mathematics.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.mathematics
                      ? isApproved(selectedChild?.grades?.mathematics)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>




              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">Português</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.portuguese.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.portuguese
                      ? isApproved(selectedChild?.grades?.portuguese)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>

             
              
              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">História</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.history.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.history
                      ? isApproved(selectedChild?.grades?.history)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>



              
              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">Geografia</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.geography.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.geography
                      ? isApproved(selectedChild?.grades?.geography)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>
              

                 
              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">Ciências</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.sciences.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.sciences
                      ? isApproved(selectedChild?.grades?.sciences)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>


              


              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">Artes</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.art.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.art
                      ? isApproved(selectedChild?.grades?.art)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>

              
              <li>
                <div className="divDisciplinesMobile">
                  <span className="spanDisciplineMobile">Educação Física</span>
                  <div className="divTrimestreMobile">
                    <span className="spanTitleMobile">1ª Tri</span>
                    <span className="spanTitleMobile">2ª Tri</span>
                    <span className="spanTitleMobile">3ª Tri</span>
                    <span className="spanTitleMobile">Apro.</span>
                  </div>

                  <div className="divGradesMobile">
                  {selectedChild?.grades?.art.map((grade) => (
                      <input
                        disabled={disabled}
                        className="spanGradeMobile"
                        defaultValue={grade}
                        key={crypto.randomUUID()}
                      />

                    ))}
                     <input
                  disabled
                  className="spanGradeMobile"
                  defaultValue={
                    selectedChild?.grades?.art
                      ? isApproved(selectedChild?.grades?.art)
                      : ""
                  }
                />
                  </div>   
                </div>
              </li>

              


             


            </ul>
          </StyledDivGradeMobile>
        ) : null}
      </StylesDivFirstMobile> 
    </>
  );
};
