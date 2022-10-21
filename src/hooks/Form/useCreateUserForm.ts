import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const yupCreateUserFormSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  passwordConfirm: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .min(6, "Mínimo de 6 caracteres")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  termsOfService: yup
    .boolean()
    .required("Você deve aceitar os termos de serviço"),
});

const useCreateUserForm = () =>
  useForm({ resolver: yupResolver(yupCreateUserFormSchema) });

export { useCreateUserForm, yupCreateUserFormSchema };
