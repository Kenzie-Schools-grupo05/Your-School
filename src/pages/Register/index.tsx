import { useContext } from "react";
import logoDesktop from "../../assets/logoDesktop.svg";
import { FormRegister } from "../../components/FormRegister";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../Providers/UserContext";
import { DivForm, FigureImgLogo, MainContainer } from "../Login/style";
import logoDesktopYourSchool from "../../assets/logoDesktopYourSchool.png";

export const Register = () => {
  const { loading } = useContext(UserContext);

  return (
    <MainContainer>
      {loading ? <Loader /> : null}
      <FigureImgLogo>
        <img src={logoDesktopYourSchool} alt="logo-school" />
      </FigureImgLogo>

      <DivForm>
        <FormRegister />
      </DivForm>
    </MainContainer>
  );
};
