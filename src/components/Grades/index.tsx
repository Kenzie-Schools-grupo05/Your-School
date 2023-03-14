import React, { useContext, useEffect } from "react";
import { iUser, UserContext } from "../../Providers/UserContext";
import { StyledDivGradeMobile, StylesDivFirstMobile } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iGradeForm, schemaGrade } from "./schema";
import { Input } from "./Input";

interface iGradeParent {
  disabled: boolean;
  selectedChild: iUser | undefined | null;
}

export const Grades = ({ disabled, selectedChild }: iGradeParent) => {
  const { user, submitChangeGrades, changeStudentGrade, changedGrades } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iGradeForm>({
    resolver: yupResolver(schemaGrade),
  });

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

  useEffect(() => {
    if (changedGrades && selectedChild && selectedChild.class) {
      changeStudentGrade(changedGrades, selectedChild.id, selectedChild.class);
    }
  }, [changedGrades]);

  return (
    <>
      <StylesDivFirstMobile>
        {selectedChild ? (
          <StyledDivGradeMobile onSubmit={handleSubmit(submitChangeGrades)}>
            {user?.type === "professor" ? (
              <h2>Boletim - {selectedChild.name}</h2>
            ) : (
              <h2>Boletim</h2>
            )}
            {selectedChild.class ? (
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
                      {selectedChild?.grades?.mathematics ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.mathematics[0]}
                            name="mathB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.mathematics[1]}
                            name="mathB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.mathematics[2]}
                            name="mathB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.mathematics
                          ? isApproved(selectedChild?.grades?.mathematics)
                          : ""}
                      </span>
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
                      {selectedChild?.grades?.portuguese ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.portuguese[0]}
                            name="portB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.portuguese[1]}
                            name="portB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.portuguese[2]}
                            name="portB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.portuguese
                          ? isApproved(selectedChild?.grades?.portuguese)
                          : ""}
                      </span>
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
                      {selectedChild?.grades?.history ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.history[0]}
                            name="historyB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.history[1]}
                            name="historyB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.history[2]}
                            name="historyB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.history
                          ? isApproved(selectedChild?.grades?.history)
                          : ""}
                      </span>
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
                      {selectedChild?.grades?.geography ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.geography[0]}
                            name="geographyB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.geography[1]}
                            name="geographyB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.geography[2]}
                            name="geographyB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.geography
                          ? isApproved(selectedChild?.grades?.geography)
                          : ""}
                      </span>
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
                      {selectedChild?.grades?.sciences ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.sciences[0]}
                            name="sciencesB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.sciences[1]}
                            name="sciencesB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.sciences[2]}
                            name="sciencesB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.sciences
                          ? isApproved(selectedChild?.grades?.sciences)
                          : ""}
                      </span>
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
                      {selectedChild?.grades?.art ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.art[0]}
                            name="artB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.art[1]}
                            name="artB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={selectedChild.grades.art[2]}
                            name="artB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.art
                          ? isApproved(selectedChild?.grades?.art)
                          : ""}
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="divDisciplinesMobile">
                    <span className="spanDisciplineMobile">
                      Educação Física
                    </span>
                    <div className="divTrimestreMobile">
                      <span className="spanTitleMobile">1ª Tri</span>
                      <span className="spanTitleMobile">2ª Tri</span>
                      <span className="spanTitleMobile">3ª Tri</span>
                      <span className="spanTitleMobile">Apro.</span>
                    </div>

                    <div className="divGradesMobile">
                      {selectedChild?.grades?.physicalEducation ? (
                        <>
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={
                              selectedChild.grades.physicalEducation[0]
                            }
                            name="physicalEduB1"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={
                              selectedChild.grades.physicalEducation[1]
                            }
                            name="physicalEduB2"
                            register={register}
                          />
                          <Input
                            type="text"
                            disabled={disabled}
                            classStyle="spanGradeMobile"
                            defaultValue={
                              selectedChild.grades.physicalEducation[2]
                            }
                            name="physicalEduB3"
                            register={register}
                          />
                        </>
                      ) : null}
                      <span className="spanGradeMobile">
                        {selectedChild?.grades?.physicalEducation
                          ? isApproved(selectedChild?.grades?.physicalEducation)
                          : ""}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <h3>Este aluno não está em uma turma!</h3>
            )}
            {user?.type === "professor" ? (
              <button type="submit">Alterar notas</button>
            ) : null}
          </StyledDivGradeMobile>
        ) : null}
      </StylesDivFirstMobile>
    </>
  );
};
