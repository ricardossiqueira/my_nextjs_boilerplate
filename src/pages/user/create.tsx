
import Head from "next/head";
import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Checkbox } from "../../components/Form/Checkbox";
import { useCreateUserForm } from "../../hooks/Form/useCreateUserForm";
import { ThemeSwitch } from "../../components/Buttons/ThemeSwitch";
import { useCreateUser } from "../../hooks/Auth/useCreateUser";
import { Router, useRouter } from "next/router";

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors, isValidating },
  } = useCreateUserForm();

  const createUser = useCreateUser();
  const router = useRouter();


  return (
    <>
      <Head>
        <title>Criar conta | Base</title>
      </Head>
      <main id="main">
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
            onSubmit={handleSubmit((values) => {
              createUser.mutate({
                email: values.email,
                password: values.password,
              });
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
              <HStack justifyContent={"space-between"} w={"100%"}>
                <HStack>
                  <Checkbox
                    name="termsOfService"
                    control={control}
                    error={errors.termsOfService}
                    rules={{ required: true }}
                    colorScheme={colorScheme}
                  >
                    <Text fontSize={"sm"}>
                      Aceito os{" "}
                      <Link href="">
                        <ChakraLink color={accent} fontWeight={"bold"}>
                          termos
                        </ChakraLink>
                      </Link>{" "}
                      e{" "}
                      <Link href="">
                        <ChakraLink color={accent} fontWeight={"bold"}>
                          políticas de privacidade
                        </ChakraLink>
                      </Link>
                    </Text>
                  </Checkbox>
                </HStack>
              </HStack>
              <HStack alignSelf={"flex-end"}>
                <Button
                  width={"fit-content"}
                  variant={"ghost"}
                  onClick={() => router.back()}
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  width={"fit-content"}
                  colorScheme={colorScheme}
                  isLoading={isSubmitting || isValidating}
                >
                  Criar conta
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </Flex> */}
      </main>
    </>
  );
}
