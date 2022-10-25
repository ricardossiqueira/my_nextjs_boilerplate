import Head from "next/head";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "../../components/Form/Input";
import { ThemeSwitch } from "../../components/Buttons/ThemeSwitch";
import { AuthContext } from "../../contexts/AuthContext";
import { useLogin } from "../../hooks/Auth/useLogin";
import { useSignInForm } from "../../hooks/Form/useLoginForm";
import { SubmitButton } from "../../components/Buttons/Primary";
import { Checkbox } from "../../components/Form/Checkbox";

export default function LoginUser() {
  const [rememberMe, setRememberMe] = useState(true);
  const [isPasswordVisible, setPasswordIsVisible] = useState(false);

  const { signIn } = useContext(AuthContext);
  const login = useLogin();

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordIsVisible(!isPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useSignInForm();

  return (
    <>
      <Head>
        <title>Login | Base</title>
      </Head>
      <main>
        <div className="absolute top-4 right-4">
          <ThemeSwitch />
        </div>
        <form
          onSubmit={handleSubmit(async (values) => {
            const res = await login.mutateAsync({
              email: values.email,
              password: values.password,
            });
            signIn(res.data, rememberMe);
          })}
          className="flex justify-center items-center h-screen"
          action="#"
        >
          <div className="bg-pink-500 dark:bg-indigo-500 flex flex-row rounded-xl items-center">
            <div className="flex w-80 bg-white dark:bg-neutral-850 flex-col space-y-4 shadow-lg p-6 rounded-xl">
              <Input
                name="email"
                placeholder="E-mail"
                type="email"
                error={errors.email}
                {...register("email")}
              />
              <Input
                name="password"
                placeholder="Senha"
                type={isPasswordVisible ? "text" : "password"}
                error={errors.password}
                {...register("password")}
              >
                {isPasswordVisible ? (
                  <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                  >
                    <AiFillEyeInvisible />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                  >
                    <AiFillEye />
                  </button>
                )}
              </Input>
              <Checkbox
                name="remember"
                error={errors.remember}
                checked={rememberMe}
                onClick={handleRememberMe}
                {...register("remember")}
              >
                Lembar de mim
              </Checkbox>
              <div className="flex w-full justify-between">
                <Link href="create">
                  <a href="#" className="text-sm">
                    Criar conta
                  </a>
                </Link>
                <Link href="#">
                  <a href="#" className="text-sm">
                    Esqueci minha senha
                  </a>
                </Link>
              </div>
              <SubmitButton type="submit" isLoading={isSubmitting}>
                Entrar
              </SubmitButton>
            </div>
            <span
              className="font-medium text-white text-2xl p-2 cursor-default select-none"
              style={{ writingMode: "vertical-lr" }}
            >
              Base | Login
            </span>
          </div>
        </form>
      </main>
    </>
  );
}
