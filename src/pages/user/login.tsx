import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Icon,
  IconButton,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Input } from "../../components/Form/Input";

import { useSignInForm } from "../../hooks/Form/useSignInForm";

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

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
        <Flex w="100vw" h="100vh" align="center" justify="center">
          <Flex
            as="form"
            w="100%"
            maxW={400}
            bg="whiteAlpha.900"
            padding={5}
            borderRadius={6}
            flexDir="column"
            onSubmit={() => {}}
            boxShadow={"xl"}
          >
            <VStack spacing={4}>
              <Text color={"purple.600"} fontSize={"3xl"} fontWeight="bold">
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
                            color={"blackAlpha.500"}
                          />
                        ) : (
                          <Icon
                            w={5}
                            h={5}
                            as={AiFillEyeInvisible}
                            color={"blackAlpha.500"}
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
                    colorScheme={"purple"}
                    checked={rememberMe}
                    onChange={handleRememberMe}
                    defaultChecked={true}
                  />
                  <Text fontSize={"sm"} color={"gray.400"}>
                    Lembrar usuário
                  </Text>
                </HStack>
                <Text fontSize={"sm"} color={"gray.400"}>
                  <Link href="">Esqueci minha senha?</Link>
                </Text>
              </HStack>
              <Text fontSize={"sm"} color={"gray.400"}>
                <Link href={"/user/create"}>Criar conta</Link>
              </Text>
            </VStack>
            <Button
              alignSelf={"flex-end"}
              type="submit"
              width={"fit-content"}
              colorScheme="purple"
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
