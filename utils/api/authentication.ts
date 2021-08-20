import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { API_ENDPOINT } from "../request_utils";

export interface AuthenticationTokenResponse {
  authToken: string;
}

export interface TokenResponse {
  token: string;
  refreshToken: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export function hasAuthenticationToken() {
  return localStorage.getItem("token") !== null;
}

export function hasRefreshToken() {
  return localStorage.getItem("refreshToken") !== null;
}

export async function refreshAuthenticationToken(): Promise<
  AuthenticationTokenResponse | undefined
> {
  if (!hasRefreshToken()) {
    return undefined;
  }
  try {
    const result = await axios.post(`${API_ENDPOINT}/api/auth/refresh`, {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    return result.data as AuthenticationTokenResponse;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export function setTokens(loginResponse: TokenResponse) {
  localStorage.setItem("token", loginResponse.token);
  localStorage.setItem("refreshToken", loginResponse.refreshToken);
}

export function login(username: string, password: string) {
  const payload: LoginRequest = {
    username,
    password,
  };
  return axios.post<TokenResponse>(`${API_ENDPOINT}/api/auth/login/`, payload);
}

export function register(username: string, email: string, password: string) {
  const payload: RegisterRequest = {
    username,
    email,
    password,
  };
  return axios.post<TokenResponse>(
    `${API_ENDPOINT}/api/auth/register/`,
    payload
  );
}
