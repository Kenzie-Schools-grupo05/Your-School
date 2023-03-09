import { useForm } from "react-hook-form";
import { iLoginFormValues } from "./type";
import { loginFormSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import {
    DivLoginBtn,
    FormStyled,
    InputField,
    InputStyled,
    LabelStyled,
    LoginBtn,
    TitleForm,
} from "../../styles/form";

export const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginFormValues>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {
            cpf: "",
            password: "",
        },
    });

    const { submit } = useContext(UserContext);

    return (
        <FormStyled onSubmit={handleSubmit(submit)}>
            <TitleForm>Login</TitleForm>
            <InputField>
                <LabelStyled htmlFor="email">
                    CPF<span> |</span>
                </LabelStyled>

                <InputStyled
                    type="email"
                    placeholder="Digite seu cpf"
                    {...register("cpf")}
                />
                {errors.cpf && <p>{errors.cpf.message}</p>}
            </InputField>

            <InputField>
                <LabelStyled htmlFor="password">
                    Senha<span> |</span>
                </LabelStyled>
                <InputStyled
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </InputField>

            <DivLoginBtn>
                <LoginBtn type="submit">Entrar</LoginBtn>
            </DivLoginBtn>
        </FormStyled>
    );
};
