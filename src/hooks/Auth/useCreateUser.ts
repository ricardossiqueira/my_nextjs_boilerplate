import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast"

import { api } from "../../services/api";
import {
  ICreateUserDTO,
  ICreateUserErrorDTO,
  ICreateUserResponseDTO,
} from "./dtos/ICreateUserDTO";

function useCreateUser() {
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
        toast("Conta criada com sucesso", {});
        router.push("/user/login");
      },
      onError: (error: AxiosError<ICreateUserErrorDTO>) => {
        const { msg } = error.response.data;
        toast("Erro ao criar conta", {});
      },
    }
  );
}

export { useCreateUser };
