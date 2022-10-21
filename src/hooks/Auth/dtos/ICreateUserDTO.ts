import { IUser } from "./ILoginDTO";

interface ICreateUserDTO {
  email: string;
  password: string;
}

interface ICreateUserResponseDTO extends IUser {}

interface ICreateUserErrorDTO {
  code: number;
  msg: string;
}

export {
  type ICreateUserDTO,
  type ICreateUserResponseDTO,
  type ICreateUserErrorDTO,
};
