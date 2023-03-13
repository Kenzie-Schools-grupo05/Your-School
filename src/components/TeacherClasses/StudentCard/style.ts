import styled from "styled-components";

export const StudentCardLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 28px 40px;
    border: 2px solid var(--grey-90);
    

    > h2 {
        font-size: var(--body);
        font-weight: var(--Regular);
    }

    > div {
        display: flex;
        gap: 17px;
    }

    > div > .editBtn {
        padding: 12px 22px;
        font-size: var(--btn-fontSize);
        color: var( --grey-100);
        background-color: var(--grey-70);
        border: 1px solid var(--grey-80);
        border-radius: 8px;
        cursor: pointer;
    }

    > div > .editBtn:hover{
        background-color: var(--color-primary);
    }

    > div > .deleteBtn {
        padding: 12px 22px;
        font-size: var(--btn-fontSize);
        color: var( --grey-100);
        background-color: var(--negative-feedback);
        border: 1px solid var(--negative-feedback);
        border-radius: 8px;
        cursor: pointer;
    }

    > div > .deleteBtn:hover{
        background-color: var(--color-terciary);
    }
    
`