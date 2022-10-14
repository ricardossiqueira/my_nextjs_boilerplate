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
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Input } from "../../components/Form/Input";
import { ThemeSwitch } from "../../components/ThemeSwitch";

import { useSignInForm } from "../../hooks/Form/useLoginForm";

export default function LoginUser() {
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

  const bg = useColorModeValue("whiteAlpha.900", "gray.800");
  const accent = useColorModeValue("accent.light.400", "accent.dark.400");
  const colorScheme = useColorModeValue("purple", "pink");
  const aiFillEyeColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");

  return (
    <>
      <Head>
        <title>Login | Base</title>
      </Head>
      <main>
        <Box position={"absolute"} top={"1rem"} right={"1rem"}>
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
            onSubmit={handleSubmit(console.log)}
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
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
