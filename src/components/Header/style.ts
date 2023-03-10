import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: var(--color-primary);

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const ContainerLogoAndMenu = styled.div`
    padding: 8px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    @media (min-width: 769px) {
        position: relative;
    }
`;
export const MenuIconStyled = styled.img`
    width: 71px;
    height: 71px;
    @media (min-width: 769px) {
        position: absolute;
        left: 5%;
    }
`;
export const Logo = styled.img`
    /* width: 234px;
    height: 151px; */
`;

export const ContainerLogout = styled.div`
    background-color: var(--color-terciary);

    display: flex;
    justify-content: center;

    padding: 17px 0;

    img:hover {
        cursor: pointer;
    }
`;
