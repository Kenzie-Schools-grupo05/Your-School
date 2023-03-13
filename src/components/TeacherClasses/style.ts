import styled from "styled-components";

export const SelectClass = styled.button`
  padding: 24px 0;
  width: 70%;
  max-width: 100%;
  margin-top: 75px;
  font-size: var(--btn-fontSize);
  color: var(--grey-100);
  border-radius: 8px;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  cursor: pointer;

  align-self: center;

  :hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`;

export const MainDash = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 39px;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10%;

  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-self: center;
  }

  @media (min-width: 678px) {
    max-width: 1100px;
  }
`;
