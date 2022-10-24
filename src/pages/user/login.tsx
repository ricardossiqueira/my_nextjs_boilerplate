import Head from "next/head";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "../../components/Form/Input";
import { ThemeSwitch } from "../../components/Buttons/ThemeSwitch";
import { AuthContext } from "../../contexts/AuthContext";
import { useLogin } from "../../hooks/Auth/useLogin";
import { useSignInForm } from "../../hooks/Form/useLoginForm";
import { SubmitButton } from "../../components/Buttons/Submit";
import { Checkbox } from "../../components/Form/Checkbox";

export default function LoginUser() {
  const [rememberMe, setRememberMe] = useState(true);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const { signIn } = useContext(AuthContext);
  const login = useLogin();

  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordIsVisible(!passwordIsVisible);
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
          className="flex justify-center items-center h-screen" action="#">
          <div className="flex w-3/6 bg-white flex-col space-y-4 shadow-lg p-6 rounded-md">
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
              type="password"
              error={errors.password}
              {...register("password")}
            />
            <Checkbox
              name="remember"
              error={errors.remember}
              {...register("remember")}>Lembar de mim</Checkbox>
            <div className="flex w-full justify-between">
              <Link href="#">
                <a href="#" className="text-sm text-gray-500">
                  Criar conta
                </a>
              </Link>
              <Link href="#">
                <a href="#" className="text-sm text-gray-500">
                  Esqueci minha senha
                </a>
              </Link>
            </div>
            <SubmitButton type="submit" isLoading={isSubmitting}>Entrar</SubmitButton>
          </div>
        </form>


        {/* <Box position={"absolute"} top={"1rem"} right={"1rem"}>
          <ThemeSwitch />
        </Box>
        <Flex w="100vw" h="100vh" align="center" justify="center">
          <Flex
            as="form"
            w="100%"
            maxW={400}
            bg={bg}
            padding={5}
            borderRadius={6}
            flexDir="column"
            onSubmit={handleSubmit(async (values) => {
              const res = await login.mutateAsync({
                email: values.email,
                password: values.password,
              });
              signIn(res.data, rememberMe);
            })}
            boxShadow={"xl"}
          >
            <VStack spacing={4}>
              <Text color={accent} fontSize={"3xl"} fontWeight="bold">
                Base
              </Text>
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
                type={passwordIsVisible ? "text" : "password"}
                error={errors.password}
                {...register("password")}
                inputElement={
                  <InputRightElement>
                    <IconButton
                      mt={"0.5rem"}
                      mr={"0.5rem"}
                      variant={"unstyled"}
                      aria-label="mostrar/ocultar senha"
                      onClick={handleTogglePasswordVisibility}
                      fontSize={"lg"}
                      pt={"0.5rem"}
                      icon={
                        passwordIsVisible ? (
                          <Icon
                            w={5}
                            h={5}
                            as={AiFillEye}
                            color={aiFillEyeColor}
                          />
                        ) : (
                          <Icon
                            w={5}
                            h={5}
                            as={AiFillEyeInvisible}
                            color={aiFillEyeColor}
                          />
                        )
                      }
                    />
                  </InputRightElement>
                }
              />

              <HStack justifyContent={"space-between"} w={"100%"}>
                <HStack>
                  <Checkbox
                    name="remember"
                    mr={"0.2rem"}
                    colorScheme={colorScheme}
                    checked={rememberMe}
                    onChange={handleRememberMe}
                    defaultChecked={true}
                  />
                  <Text fontSize={"sm"}>Lembrar usuário</Text>
                </HStack>
                <Text fontSize={"sm"}>
                  <Link href="">Esqueci minha senha?</Link>
                </Text>
              </HStack>
              <Text fontSize={"sm"}>
                <Link href={"/user/create"}>Criar conta</Link>
              </Text>
            </VStack>
            <Button
              alignSelf={"flex-end"}
              type="submit"
              width={"fit-content"}
              colorScheme={colorScheme}
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </Flex>
        </Flex> */}
      </main>
    </>
  );
}
