import { useForm } from "react-hook-form";
import { iLoginFormValues } from "./type";
import { loginFormSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

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
        <form onSubmit={handleSubmit(submit)}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Digite seu email..."
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </fieldset>

            <fieldset>
                <label htmlFor="password">Email</label>
                <input
                    type="password"
                    placeholder="Digite sua senha..."
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </fieldset>

            <button type="submit">Entrar</button>
        </form>
    );
};
