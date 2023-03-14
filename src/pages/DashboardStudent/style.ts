import styled from "styled-components";

export const StyledDivDashboardStudent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #user__infos {
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    width: 100%;

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
`;
