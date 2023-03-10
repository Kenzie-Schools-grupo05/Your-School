import styled from "styled-components";

export const StyledMain = styled.main`
  #user__infos {
    border-bottom: 1px solid black;
    margin-bottom: 20px;

    > div {
      margin: 0 auto;
      text-align: center;
      width: fit-content;
      padding: 30px;
      user-select: none;
    }

    > div > h2 {
      color: var(--grey-0);
      font-size: var(--title-1);
      font-weight: 500;
      padding-bottom: 12px;
    }

    > div > p {
      font-weight: 400;
      color: var(--grey-20);
    }
  }
  .sectionContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-100);
  }

  #selectContainer {
    width: fit-content;
    background-color: var(--color-secondary);
    margin: 20px auto;
    border-radius: 6px;

    > select {
      color: var(--grey-100);
      width: 100%;
      background-color: var(--color-secondary);
      border: none;
      padding: 12px 16px;
      border-radius: 6px;
      outline: none;
    }
    select:hover {
      cursor: pointer;
    }

    > select > option {
      color: var(--grey-90);
    }
  }
`;
