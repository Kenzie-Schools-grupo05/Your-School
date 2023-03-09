import styled from "styled-components";

export const MainContainer = styled.main`
    background-color: var(--color-primary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;

    @media (min-width: 800px) {
        flex-direction: row;
        gap: 40px;
    }
`;

export const FigureImgLogo = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    img {
        margin-top: 15px;
        width: 290px;

        @media (min-width: 500px) {
            width: 100%;
            max-width: 400px;
        }
    }
`;

export const DivForm = styled.div`
    background-color: var(--grey-90);

    width: 80%;
    max-width: 600px;

    border-radius: var(--radius-default);

    padding: 40px 0;
`;
