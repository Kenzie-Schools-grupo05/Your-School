import logoDesktop from "../../assets/logoDesktop.svg";
import { FormRegister } from "../../components/FormRegister";
import { DivForm, FigureImgLogo, MainContainer } from "../Login/style";

export const Register = () => (
    <MainContainer>
        <FigureImgLogo>
            <img src={logoDesktop} alt="logo-school" />
        </FigureImgLogo>

        <DivForm>
            <FormRegister />
        </DivForm>
    </MainContainer>
);
