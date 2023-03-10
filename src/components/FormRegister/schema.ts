import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    email: yup.string().required("Email obriatório").email("Email inválido"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Deve ter no mínimo 8 caracteres com letras, números e um símbolo"
        ),
    confirmPassword: yup
        .string()
        .required("Confirme sua senha")
        .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
    cpf: yup
        .string()
        .required("CPF obrigatório")
        .matches(
            /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/,
            "O CPF deve conter pelo menos os 11 dígitos"
        ),
    typeAcc: yup.string().required("Selecione o tipo de conta"),
});
