import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast"

import { ILoginDTO, ILoginResponseDTO } from "./dtos/ILoginDTO";
import { IRequestError } from "../../interfaces/IRequestError";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { api } from "../../services/api";

function useLogin() {
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
        toast("Login realizado com sucesso", {});
        router.push("/");
      },
      onError: (error: IRequestError) => {
        const { error_description } = error.response.data;
        toast("Erro ao efetuar login", {});
      },
    }
  );
}

export { useLogin };
