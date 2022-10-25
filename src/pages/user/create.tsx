import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Input } from "../../components/Form/Input";
import { Checkbox } from "../../components/Form/Checkbox";
import { useCreateUserForm } from "../../hooks/Form/useCreateUserForm";
import { ThemeSwitch } from "../../components/Buttons/ThemeSwitch";
import { useCreateUser } from "../../hooks/Auth/useCreateUser";
import { SubmitButton } from "../../components/Buttons/Primary";
import { SecondaryButton } from "../../components/Buttons/Secondary";

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useCreateUserForm();

  const createUser = useCreateUser();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Criar conta | Base</title>
      </Head>
      <main>
        <div className="absolute top-4 right-4">
          <ThemeSwitch />
        </div>
        <form
          onSubmit={handleSubmit((values) => {
            createUser.mutate({
              email: values.email,
              password: values.password,
            });
          })}
          className="flex justify-center items-center h-screen"
          action="#"
        >
          <div className="bg-pink-500 dark:bg-indigo-500 flex flex-row rounded-xl items-center">
            <div className="flex w-80 bg-white dark:bg-neutral-850 flex-col space-y-4 shadow-lg p-6 rounded-xl">
              <Input
                name="email"
                placeholder="E-mail"
                error={errors.email}
                {...register("email")}
              />
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="passwordConfirm"
                placeholder="Confirmar Senha"
                type="password"
                error={errors.passwordConfirm}
                {...register("passwordConfirm")}
              />
              <Checkbox
                name="termsOfService"
                error={errors.termsOfService}
                {...register("termsOfService")}
              >
                <span className="font-sm [&>a]:text-pink-500 dark:[&>a]:text-indigo-500 [&>a]:underline [&>a]:font-medium">
                  Aceito os{" "}
                  <Link href="">
                    <Link href="#">
                      <a href="#">termos</a>
                    </Link>
                  </Link>{" "}
                  e{" "}
                  <Link href="">
                    <Link href="#">
                      <a href="#">políticas de privacidade</a>
                    </Link>
                  </Link>
                </span>
              </Checkbox>
              <div className="flex w-full justify-between space-x-4">
                <SecondaryButton
                  type="button"
                  onClick={() => router.push("login")}
                >
                  Voltar
                </SecondaryButton>
                <SubmitButton type="submit" isLoading={isSubmitting}>
                  Criar
                </SubmitButton>
              </div>
            </div>
            <span
              className="font-medium text-white text-2xl p-2 cursor-default select-none"
              style={{ writingMode: "vertical-lr" }}
            >
              Base | Nova conta
            </span>
          </div>
        </form>
      </main>
    </>
  );
}
