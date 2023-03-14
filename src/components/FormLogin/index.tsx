import { useForm } from "react-hook-form";
import { iLoginFormValues } from "./type";
import { loginFormSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import {
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../../styles/form";
import { DivLoginBtn, LoginBtn } from "./style";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { submit } = useContext(UserContext);

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <TitleForm>Login</TitleForm>
      <InputField>
        <LabelStyled htmlFor="email">Email</LabelStyled>

        <InputStyled
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <ErrorStyled>{errors.email.message}</ErrorStyled>}
      </InputField>

      <InputField>
        <LabelStyled htmlFor="password">Senha </LabelStyled>
        <InputStyled
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <ErrorStyled>{errors.password.message}</ErrorStyled>
        )}
      </InputField>

      <DivLoginBtn>
        <LoginBtn type="submit" className="loginBtn">
          Entrar
        </LoginBtn>
      </DivLoginBtn>
    </FormStyled>
  );
};
