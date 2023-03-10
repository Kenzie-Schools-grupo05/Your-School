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
    }

    > div > h2 {
      color: var(--grey-0);
      font-size: var(--title-1);
    }
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
    }

    > select > option {
      color: var(--grey-90);
    }
  }
`;
