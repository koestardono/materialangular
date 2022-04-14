export class LoginResponse {
  access_token: string;
  expires_in: number;
  r_token: string;
  user_name: string;
  login_name: string;
  first_login: string;
  change_password: string;
  admin_flag: number;
  // user_flag: number;
  user_flags: string[];
  date_last_login: string;
}

export class LoginToken {
  id: string;
  token: string;
}

export const initialLoginResponse: LoginResponse = {
  access_token: null,
  expires_in: null,
  r_token: null,
  user_name: null,
  login_name: null,
  first_login: null,
  change_password: null,
  admin_flag: 0,
  // user_flag: 0,
  user_flags: null,
  date_last_login: null,
};
