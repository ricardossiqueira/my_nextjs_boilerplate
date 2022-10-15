import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

import { ILoginDTO, ILoginResponseDTO } from "./dtos/ILoginDTO";
import { IRequestError } from "../../interfaces/IRequestError";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { api } from "../../services/api";

function useLogin() {
  const toast = useToast();
  const router = useRouter();
  return useMutation(
    async (data: ILoginDTO) => {
      const response: AxiosResponse<ILoginResponseDTO> = await api.post(
        "auth/v1/token?grant_type=password",
        data
      );
      return response;
    },
    {
      onSuccess: () => {
        toast({
          title: "Login realizado com sucesso",
          status: "success",
          isClosable: true,
        });
        router.push("/");
      },
      onError: (error: IRequestError) => {
        const { error_description } = error.response.data;
        toast({
          title: "Erro ao efetuar login",
          description: error_description,
          status: "error",
          isClosable: true,
        });
      },
    }
  );
}

export { useLogin };
