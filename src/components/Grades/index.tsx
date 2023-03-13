import React, { useContext, useEffect } from "react";
import { iUser, UserContext } from "../../Providers/UserContext";
import { StyledDivGradeMobile, StylesDivFirstMobile } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iGradeForm, schemaGrade } from "./schema";
import { Input } from "./Input";

interface iGradeParent {
  disabled: boolean;
}

export const Grades = ({ disabled }: iGradeParent) => {
  const {
    user,
    submitChangeGrades,
    changeStudentGrade,
    changedGrades,
    studentGrade,
  } = useContext(UserContext);

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
    if (changedGrades && studentGrade && studentGrade.class) {
      changeStudentGrade(changedGrades, studentGrade.id, studentGrade.class);
    }
  }, [changedGrades]);

  return (
    <>
      <StylesDivFirstMobile>
        {studentGrade ? (
          <StyledDivGradeMobile onSubmit={handleSubmit(submitChangeGrades)}>
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
                    {studentGrade?.grades?.mathematics ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.mathematics[0]}
                          name="mathB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.mathematics[1]}
                          name="mathB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.mathematics[2]}
                          name="mathB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.mathematics
                        ? isApproved(studentGrade?.grades?.mathematics)
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
                    {studentGrade?.grades?.portuguese ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.portuguese[0]}
                          name="portB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.portuguese[1]}
                          name="portB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.portuguese[2]}
                          name="portB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.portuguese
                        ? isApproved(studentGrade?.grades?.portuguese)
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
                    {studentGrade?.grades?.history ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.history[0]}
                          name="historyB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.history[1]}
                          name="historyB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.history[2]}
                          name="historyB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.history
                        ? isApproved(studentGrade?.grades?.history)
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
                    {studentGrade?.grades?.geography ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.geography[0]}
                          name="geographyB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.geography[1]}
                          name="geographyB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.geography[2]}
                          name="geographyB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.geography
                        ? isApproved(studentGrade?.grades?.geography)
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
                    {studentGrade?.grades?.sciences ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.sciences[0]}
                          name="sciencesB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.sciences[1]}
                          name="sciencesB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.sciences[2]}
                          name="sciencesB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.sciences
                        ? isApproved(studentGrade?.grades?.sciences)
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
                    {studentGrade?.grades?.art ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.art[0]}
                          name="artB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.art[1]}
                          name="artB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={studentGrade.grades.art[2]}
                          name="artB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.art
                        ? isApproved(studentGrade?.grades?.art)
                        : ""}
                    </span>
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
                    {studentGrade?.grades?.physicalEducation ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={
                            studentGrade.grades.physicalEducation[0]
                          }
                          name="physicalEduB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={
                            studentGrade.grades.physicalEducation[1]
                          }
                          name="physicalEduB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGradeMobile"
                          defaultValue={
                            studentGrade.grades.physicalEducation[2]
                          }
                          name="physicalEduB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <span className="spanGradeMobile">
                      {studentGrade?.grades?.physicalEducation
                        ? isApproved(studentGrade?.grades?.physicalEducation)
                        : ""}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            {user?.type === "professor" ? (
              <button type="submit">Alterar notas</button>
            ) : null}
          </StyledDivGradeMobile>
        ) : null}
      </StylesDivFirstMobile>
    </>
  );
};
