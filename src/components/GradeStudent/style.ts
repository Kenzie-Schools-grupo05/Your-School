import styled from "styled-components";

export const StyledDivGrade = styled.form`
  width: 968px;
  height: 743px;
  background-color: var(--grey-100);
  justify-content: center;
  align-items: center;

  & h2 {
  }

  & ul {
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
