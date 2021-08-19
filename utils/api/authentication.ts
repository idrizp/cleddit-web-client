import axios from "axios";
import { API_ENDPOINT } from "../request_utils";

export interface AuthenticationTokenResponse {
  authToken: string;
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
