import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  border-radius: var(--radius-default);

  width: 100%;
`;

export const TitleForm = styled.h1`
  font-size: var(--title-1);
  font-weight: var(--Bold);
`;

export const InputField = styled.div`
  padding: 22px 20px;

  border-radius: var(--radius-default);

  background-color: var(--grey-100);

  width: 70%;
  max-width: 410px;

  display: flex;
  justify-content: center;
  gap: 10px;

  font-size: var(--text-1);
  font-weight: var(--Medium);

  @media (min-width: 500px) {
    width: 60%;
  }
`;
export const ErrorStyled = styled.p`
  color: var(--negative-feedback);
`;
export const LabelStyled = styled.label`
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media (min-width: 500px) {
    font-size: var(--inputText);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 300px;

  border: none;

  &:focus {
    outline: 0;
  }

  @media (min-width: 500px) {
    &::placeholder {
      font-size: var(--inputText);
      font-weight: var(--Regular);
    }
  }
`;
