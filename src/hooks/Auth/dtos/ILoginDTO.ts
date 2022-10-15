interface ILoginDTO {
  email: string;
  password: string;
}

interface ILoginResponseDTO {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  user: IUser;
}

export interface IRefreshTokenResponse {
  token: string;
  refreshToken: string;
}

interface IUser {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: IAppMetadata;
  user_metadata: IUserMetadata;
  identities: IIdentity[];
  created_at: string;
  updated_at: string;
}

interface IAppMetadata {
  provider: string;
  providers: string[];
}

interface IUserMetadata {}

interface IIdentity {
  id: string;
  user_id: string;
  identity_data: IIdentityData;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

interface IIdentityData {
  sub: string;
}

export { type ILoginDTO, type ILoginResponseDTO, type IUser };
