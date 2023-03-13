import { FormLogin } from "../../components/FormLogin";
import logoDesktop from "../../assets/logoDesktop.svg";
import {
  DivForm,
  DivSignUpLink,
  FigureImgLogo,
  MainContainer,
  SignUpLink,
} from "./style";
import { Loader } from "../../components/Loader";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

export const Login = () => {
  const { loading } = useContext(UserContext);

  return (
    <MainContainer>
      {loading ? <Loader /> : null}
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
};
