import { FormLogin } from "../../components/FormLogin";
import Header from "../../components/Header";
import logoSchool from "../../assets/header-logo.svg";
import logoDesktop from "../../assets/logoDesktop.svg";
import {
    DivForm,
    DivSignUpLink,
    FigureImgLogo,
    MainContainer,
    SignUpLink,
} from "./style";
import { Link } from "react-router-dom";

const Login = () => (
    <MainContainer>
        <FigureImgLogo>
            <img src={logoDesktop} alt="logo-school" />
        </FigureImgLogo>
        <DivForm>
            <FormLogin />
            <p>Não tem uma conta?</p>
            <DivSignUpLink>
                <SignUpLink to="/register" className="signUpLink">
                    Cadastre-se
                </SignUpLink>
            </DivSignUpLink>
        </DivForm>
    </MainContainer>
);
export default Login;
