import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DivSignUpLink } from "../../pages/Login/style";
import arrowDown from "../../assets/arrow-down.svg";
import { iRegisterFormValues, UserContext } from "../../Providers/UserContext";
import {
    FormStyled,
    InputField,
    InputStyled,
    LabelStyled,
    TitleForm,
} from "../../styles/form";
import { registerFormSchema } from "./schema";
import { ArrowDownImage, SectionSelect, SelectField, SignUpBtn } from "./style";

export const FormRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iRegisterFormValues>({
        resolver: yupResolver(registerFormSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            cpf: "",
            type: "",
        },
    });

    const { submitRegister } = useContext(UserContext);

    return (
        <FormStyled onSubmit={handleSubmit(submitRegister)}>
            <TitleForm>Cadastro</TitleForm>
            <InputField>
                <LabelStyled>Email</LabelStyled>
                <InputStyled
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </InputField>
            <InputField>
                <LabelStyled>Senha</LabelStyled>
                <InputStyled
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </InputField>
            <InputField>
                <LabelStyled>Confirmar senha</LabelStyled>
                <InputStyled
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <p>{errors.confirmPassword.message}</p>
                )}
            </InputField>
            <InputField>
                <LabelStyled>CPF</LabelStyled>
                <InputStyled
                    type="text"
                    placeholder="Digite seu CPF"
                    {...register("cpf")}
                />
                {errors.cpf && <p>{errors.cpf.message}</p>}
            </InputField>
            <InputField>
                <LabelStyled>Email</LabelStyled>
                <InputStyled
                    type="email"
                    placeholder="Digite seu email"
                    {...register("type")}
                />
                {errors.type && <p>{errors.type.message}</p>}
            </InputField>

            <SectionSelect>
                <SelectField name="selectTypeAcc" id="selectTypeAcc">
                    <option hidden={true}>Selecionar tipo de conta</option>
                    <option value="Aluno">Aluno</option>
                    <option value="Pai">Pai</option>
                </SelectField>
                <ArrowDownImage src={arrowDown} />
            </SectionSelect>

            <DivSignUpLink>
                <SignUpBtn className="signUpBtn">Cadastrar</SignUpBtn>
            </DivSignUpLink>
        </FormStyled>
    );
};
