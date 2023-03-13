import React, { useContext, useEffect } from "react";
import { iUser, UserContext } from "../../Providers/UserContext";
import { StyledDivGradeMobile, StylesDivFirstMobile } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iGradeForm, schemaGrade } from "./schema";
import { Input } from "./Input";

interface iGradeParent {
  disabled: boolean;
  selectedChild: iUser | null | undefined;
}

export const Grades = ({ disabled, selectedChild }: iGradeParent) => {
  const { user } = useContext(UserContext);

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

  const { submitChangeGrades, changeStudentGrade, changedGrades } =
    useContext(UserContext);

  useEffect(() => {
    if (changedGrades && selectedChild && selectedChild.class) {
      changeStudentGrade(changedGrades, selectedChild.id, selectedChild.class);
    }
  }, [changedGrades]);

  return (
    <>
      {/* {selectedChild ? (
        <StyledDivGrade onSubmit={handleSubmit(submitChangeGrades)} >
          <h2>Boletim</h2>

          <ul className="grid-container">
            <li>
              <span className="spanTitle teste">Matéria</span>
              <span className="spanTitle">1ª Trimestre</span>
              <span className="spanTitle">2ª Trimestre</span>
              <span className="spanTitle">3ª Trimestre</span>
              <span className="spanTitle">Aprovado</span>
            </li>
            <li>
              <span className="spanDiscipline">Matemática</span>
              {selectedChild?.grades?.mathematics ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.mathematics[0]}
                    name="mathB1"
                    register={register}
                  />
                  {console.log(errors.mathB1?.message)
                  }
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.mathematics[1]}
                    name="mathB2"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.mathematics[2]}
                    name="mathB3"
                    register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
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
              {selectedChild?.grades?.portuguese ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.portuguese[0]}
                    name="portB1"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.portuguese[1]}
                    name="portB2"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.portuguese[2]}
                    name="portB3"
                    register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
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
              {selectedChild?.grades?.history ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.history[0]}
                    name="historyB1"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.history[1]}
                    name="historyB2"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.history[2]}
                    name="historyB3"
                    register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
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
              {selectedChild?.grades?.geography ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.geography[0]}
                    name="geographyB1"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.geography[1]}
                    name="geographyB2"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.geography[2]}
                    name="geographyB3"
                    register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
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
              {selectedChild?.grades?.sciences ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.sciences[0]}
                    name="sciencesB1"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.sciences[1]}
                    name="sciencesB2"
                    register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.sciences[2]}
                    name="sciencesB3"
                          register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
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
              {selectedChild?.grades?.art ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.art[0]}
                    name="artB1"
                          register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.art[1]}
                    name="artB2"
                          register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.art[2]}
                    name="artB3"
                          register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
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
              {selectedChild?.grades?.physicalEducation ? (
                <>
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.physicalEducation[0]}
                    name="physicalEduB1"
                          register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.physicalEducation[1]}
                    name="physicalEduB2"
                          register={register}
                  />
                  <Input
                    type="text"
                    disabled={disabled}
                    classStyle="spanGrade"
                    defaultValue={selectedChild.grades.physicalEducation[2]}
                    name="physicalEduB3"
                          register={register}
                  />
                </>
              ) : null}
              <input
                type="text"
                disabled
                className="spanGrade"
                defaultValue={
                  selectedChild?.grades?.physicalEducation
                    ? isApproved(selectedChild?.grades?.physicalEducation)
                    : ""
                }
              />
            </li>
          <button type="submit">Alterar</button>
          </ul>
        </StyledDivGrade>
      ) : null} */}

      {/* <StylesDivFirstMobile>
        {selectedChild ? (
          <StyledDivGradeMobile onSubmit={handleSubmit(submitChangeGrades)} >
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
                    {selectedChild?.grades?.mathematics ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.mathematics[0]}
                          name="mathB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.mathematics[1]}
                          name="mathB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.mathematics[2]}
                          name="mathB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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
                    {selectedChild?.grades?.portuguese ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.portuguese[0]}
                          name="portB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.portuguese[1]}
                          name="portB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.portuguese[2]}
                          name="portB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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
                    {selectedChild?.grades?.history ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.history[0]}
                          name="historyB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.history[1]}
                          name="historyB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.history[2]}
                          name="historyB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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
                    {selectedChild?.grades?.geography ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.geography[0]}
                          name="geographyB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.geography[1]}
                          name="geographyB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.geography[2]}
                          name="geographyB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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
                    {selectedChild?.grades?.sciences ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.sciences[0]}
                          name="sciencesB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.sciences[1]}
                          name="sciencesB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.sciences[2]}
                          name="sciencesB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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
                    {selectedChild?.grades?.art ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.art[0]}
                          name="artB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.art[1]}
                          name="artB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={selectedChild.grades.art[2]}
                          name="artB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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
                    {selectedChild?.grades?.physicalEducation ? (
                      <>
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={
                            selectedChild.grades.physicalEducation[0]
                          }
                          name="physicalEduB1"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={
                            selectedChild.grades.physicalEducation[1]
                          }
                          name="physicalEduB2"
                          register={register}
                        />
                        <Input
                          type="text"
                          disabled={disabled}
                          classStyle="spanGrade"
                          defaultValue={
                            selectedChild.grades.physicalEducation[2]
                          }
                          name="physicalEduB3"
                          register={register}
                        />
                      </>
                    ) : null}
                    <input
                      type="text"
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

              <button type="submit">Alterar notas</button>
            </ul>
          </StyledDivGradeMobile>
        ) : null}
      </StylesDivFirstMobile> */}

      <StylesDivFirstMobile>
        {selectedChild ? (
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
            {user?.type === "professor" ? (
              <button type="submit">Alterar notas</button>
            ) : null}
          </StyledDivGradeMobile>
        ) : null}
      </StylesDivFirstMobile>
    </>
  );
};
