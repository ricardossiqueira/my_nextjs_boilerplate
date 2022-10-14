import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const yupSignInFormSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Senha muito curta (mínimo 8 caracteres)"),
});

const useSignInForm = () =>
  useForm({
    resolver: yupResolver(yupSignInFormSchema),
  });

export { useSignInForm, yupSignInFormSchema };
