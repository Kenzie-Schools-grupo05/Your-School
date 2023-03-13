import styled from "styled-components";

export const StylesDivFirstMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 16px;
  @media (min-width: 1024px) {
    /* display: none; */
    max-width: 1600px;
    padding-bottom: 32px;
  }

  & .spanDisciplineMobile {
    padding: 20px 0;
    color: var(--grey-100);
    background-color: var(--color-primary);

    text-align: center;
    width: 360px;
  }
  & .divDisciplinesMobile {
    display: flex;
    flex-direction: column;
  }

  & .divTrimestreMobile {
    flex-direction: row;
    gap: 13px;
    display: flex;
    margin-bottom: 11px;
    margin-top: 11px;
  }
  & .spanTitleMobile {
    width: 80px;
    height: 32px;
    background-color: var(--grey-90);
    color: var(--grey-0);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  & .spanGradeMobile {
    width: 75px;
    height: 32px;
    text-align: center;
    align-items: center;

    background-color: var(--grey-90);
  }

  & .divGradesMobile {
    gap: 10px;
    display: flex;
  }

  & .divGradesMobile > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-0);
    height: 37px;
  }
`;

export const StyledDivGradeMobile = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: var(--grey-100);
  justify-content: center;
  align-items: center;
  user-select: none;

  & h2 {
    font-size: var(--title-1);
    text-align: center;
    padding: 20px;
    font-weight: 500;
  }

  & li {
    padding: 10px;
    color: var(--grey-100);
    background: white;
    gap: 20px;
  }
  & .spanGrade {
    background-color: var(--grey-90);
    text-align: center;
    padding: 20px 0;
    width: 175px;
  }

  & input {
    width: 80px;
    height: 32px;
    background-color: var(--grey-90);
    color: var(--grey-0);
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  & .spanTitle {
    background-color: var(--color-primary);
    color: var(--grey-100);
    padding: 20px 0;
    display: inline-table;
    text-align: center;
    font-size: var(--text-1);
    width: 175px;
  }
  & .spanDiscipline {
    padding: 20px 0;
    color: var(--grey-100);
    background-color: var(--color-terciary);
    text-align: center;
    width: 175px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1100px;
    width: 100%;
  }

  > button {
    align-self: center;
    margin-top: 1.5rem;
    padding: 11px 0;
    align-self: center;
    width: 100%;
    max-width: 360px;
    background-color: var(--grey-90);
    border: 1px solid var(--grey-90);
    color: var(--grey-70);
    font-size: var(--btn-fontSize);
    border-radius: 8px;
  }

  > button:hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: var(--grey-100);
  }

  @media (min-width: 1024px) {
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: 1500px;
      width: 100%;
    }
  }
`;
