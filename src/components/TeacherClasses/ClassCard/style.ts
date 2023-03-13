import styled from "styled-components";

export const ClassCardLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 28px 40px;
    background-color: var(--grey-100);
    border: 2px solid var(--grey-90);
    

    > h2 {
        font-size: var(--body);
        font-weight: var(--Regular);
    }

    > button {
        padding: 12px 22px;
        font-size: var(--btn-fontSize);
        color: var( --grey-100);
        background-color: var(--grey-70);
        border: 1px solid var(--grey-80);
        border-radius: 8px;
        cursor: pointer;
    }

    > button:hover{
        background-color: var(--color-primary);
    }
    
`