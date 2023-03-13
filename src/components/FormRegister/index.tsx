import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { DivSignUpLink } from "../../pages/Login/style";
import arrowDown from "../../assets/arrow-down.svg";
import { UserContext } from "../../Providers/UserContext";
import {
  ErrorStyled,
  FormStyled,
  InputField,
  InputStyled,
  LabelStyled,
  TitleForm,
} from "../../styles/form";
import { registerFormSchema } from "./schema";
import { ArrowDownImage, SectionSelect, SelectField, SignUpBtn } from "./style";
import { iRegisterFormValues } from "../../Providers/UserContext";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const navigate = useNavigate();
  const [changeSelect, setChangeSelect] = useState("");

  const returnBtn: () => void = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      type: "",
      cpfParent: "",
    },
  });

  const { submitRegister } = useContext(UserContext);
  return (
    <FormStyled onSubmit={handleSubmit(submitRegister)}>
      <TitleForm>Cadastro</TitleForm>
      <InputField>
        <LabelStyled>
          Nome<span></span>
        </LabelStyled>
        <InputStyled
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <ErrorStyled>{errors.name.message}</ErrorStyled>}
      </InputField>
      <InputField>
        <LabelStyled>
          Email<span></span>
        </LabelStyled>
        <InputStyled
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <ErrorStyled>{errors.email.message}</ErrorStyled>}
      </InputField>
      <InputField>
        <LabelStyled>
          Senha<span></span>
        </LabelStyled>
        <InputStyled
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <ErrorStyled>{errors.password.message}</ErrorStyled>
        )}
      </InputField>
      <InputField>
        <LabelStyled>
          Confirmar senha<span></span>
        </LabelStyled>
        <InputStyled
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorStyled>{errors.confirmPassword.message}</ErrorStyled>
        )}
      </InputField>
      <InputField>
        <LabelStyled>
          CPF<span></span>
        </LabelStyled>
        <InputStyled
          type="text"
          placeholder="Digite seu CPF"
          {...register("cpf")}
        />
        {errors.cpf && <ErrorStyled>{errors.cpf.message}</ErrorStyled>}
      </InputField>

      {changeSelect === "student" ? (
        <InputField>
          <LabelStyled>CPF do Responsável</LabelStyled>
          <InputStyled
            required
            type="text"
            placeholder="Digite o CPF do seu responsável"
            {...register("cpfParent")}
          />
          {errors.cpfParent && (
            <ErrorStyled>{errors.cpfParent.message}</ErrorStyled>
          )}
        </InputField>
      ) : null}

      <DivSignUpLink>
        <SignUpBtn className="signUpBtn" type="submit">
          Cadastrar
        </SignUpBtn>
      </DivSignUpLink>
      <span
        onClick={() => {
          returnBtn();
        }}
      >
        Voltar
      </span>
    </FormStyled>
  );
};
