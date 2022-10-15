import { AxiosError } from "axios";

interface IRequestError
  extends AxiosError<{ error: string; error_description: string }> {}

export type { IRequestError };
