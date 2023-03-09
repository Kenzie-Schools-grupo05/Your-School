import { FormLogin } from "../../components/FormLogin";
import Header from "../../components/Header";
import logoSchool from "../../assets/header-logo.svg";
import logoDesktop from "../../assets/logoDesktop.svg";
import { DivForm, FigureImgLogo, MainContainer } from "./style";

const Login = () => (
    <MainContainer>
        <FigureImgLogo>
            <img src={logoDesktop} />
        </FigureImgLogo>
        <DivForm>
            <FormLogin />
        </DivForm>
    </MainContainer>
);
export default Login;
