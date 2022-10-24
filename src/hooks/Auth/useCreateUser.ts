import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import {
  ICreateUserDTO,
  ICreateUserErrorDTO,
  ICreateUserResponseDTO,
} from "./dtos/ICreateUserDTO";

function useCreateUser() {
  const toast = useToast();
  const router = useRouter();
  return useMutation(
    async (data: ICreateUserDTO) => {
      const response: AxiosResponse<ICreateUserResponseDTO> = await api.post(
        "auth/v1/signup",
        data
      );
      return response;
    },
    {
      onSuccess: () => {
        toast({
          title: "Conta criada com sucesso",
          description: "Redirecionando para a página de login",
          status: "success",
          isClosable: true,
        });
        router.push("/user/login");
      },
      onError: (error: AxiosError<ICreateUserErrorDTO>) => {
        const { msg } = error.response.data;
        toast({
          title: "Erro ao criar conta",
          description: msg,
          status: "error",
          isClosable: true,
        });
      },
    }
  );
}

export { useCreateUser };
