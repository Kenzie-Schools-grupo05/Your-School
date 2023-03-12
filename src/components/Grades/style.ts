import styled from "styled-components";


// estilização formulario desktop
export const StyledDivGrade = styled.form`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  align-items: center;
  justify-content: center;

  width: 968px;
  height: 743px;
  background-color: var(--grey-100);
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: var(--title-1);
    text-align: center;
    padding: 20px;
  }

  & li {
    padding: 10px;
    color: var(--grey-100);
    grid-template-columns: repeat(5, 1fr);
    display: grid;
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
    border: none;
    font-weight: 600;
    font-family: "Inter", sans-serif;
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
`;

//estilização da div mobile
export const StylesDivFirstMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    display: none;
  }


  & .spanDisciplineMobile {
    padding: 20px 0;
    color: var(--grey-100);
    background-color: var(--color-primary);

    text-align: center;
    width: 360px;
    /* Height:33px; */
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
  }

  & .spanGradeMobile {
    width: 75px;
    height: 32px;
    text-align: center;
    margin-left: 11px;
    align-items: center;

    background-color: var(--grey-90);
  }
`;


// estilização formulario mobile
export const StyledDivGradeMobile = styled.form`
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: var(--grey-100);
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: var(--title-1);
    text-align: center;
    padding: 20px;
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
    border: none;
    font-weight: 600;
    font-family: "Inter", sans-serif;
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
`;


