import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
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
    cpf: yup.string().required("CPF obrigatório"),
    // .matches(
    //     /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/,
    //     "CPF deve estar no formato 'xxx.xxx.xxx-xx'")
    type: yup.string().required("Selecione o tipo de conta"),
    cpfParent: yup.string(),
    // .required("CPF do responsável obrigatório")
});
