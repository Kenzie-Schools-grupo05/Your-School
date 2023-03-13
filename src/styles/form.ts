import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: var(--radius-default);

  width: 100%;

  position: relative;
  padding-bottom: 20px;

  @media (min-width: 500px) {
    gap: 32px;
  }

  > span {
    position: absolute;
    bottom: -20px;
    font-weight: 500;
    color: var(--grey-80);
    user-select: none;
  }

  > span:hover {
    cursor: pointer;
    color: var(--grey-20);
  }
`;

export const TitleForm = styled.h1`
  font-size: var(--title-1);
  font-weight: var(--Bold);
  padding-bottom: 12px;
`;

export const InputField = styled.div`
  padding: 18px 20px;

  border-radius: var(--radius-default);

  background-color: var(--grey-100);

  width: 70%;
  max-width: 410px;

  display: flex;
  justify-content: flex-start;
  gap: 12px;

  font-size: var(--text-1);
  font-weight: var(--Medium);
  user-select: none;

  /* p {
        color: var(--negative-feedback);
    } */

  @media (min-width: 500px) {
    padding: 22px 20px;
    width: 60%;
  }
`;
export const ErrorStyled = styled.p`
  color: var(--negative-feedback);
`;
export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-right: 14px;
  border-right: 2px solid gray;

  @media (min-width: 500px) {
    font-size: var(--inputText);
  }
`;

export const InputStyled = styled.input`
  /* width: 100%; */
  max-width: 135px;

  font-size: 0.9rem;

  border: none;

  outline: none;

  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset;
  }

  &:focus {
    outline: 0;
  }

  @media (min-width: 500px) {
    max-width: 200px;
    &::placeholder {
      position: absolute;
      bottom: 0;
      font-size: var(--inputText);
      font-weight: var(--Regular);
    }
  }
`;
