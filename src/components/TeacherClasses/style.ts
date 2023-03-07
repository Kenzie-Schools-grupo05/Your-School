import styled from "styled-components";

export const SelectClass = styled.button`
  padding: 24px 0;
  width: 100%;
  margin-top: 75px;
  font-size: var(--btn-fontSize);
  color: var(--grey-100);
  border-radius: 8px;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  cursor: pointer;
  max-width: 1100px;
  align-self: center;

  :hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`;

export const MainDash = styled.main`
  max-width: 100%;
  padding: 0 39px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10%;
`;
