import axios, {
  AxiosError,
} from "axios";
import { refreshAuthenticationToken } from "./api/authentication";

export const API_ENDPOINT = "localhost:8080";

export const authenticatedAxios = axios.create();

authenticatedAxios.interceptors.request.use(async (config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return config;
});

authenticatedAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
      const result = await refreshAuthenticationToken();
      if (!result) {
        localStorage.removeItem("refreshToken");
        return Promise.reject(error);
      }
      localStorage.setItem("token", result.authToken);
      return authenticatedAxios(originalRequest);
    }
    return Promise.reject(error);
  }
);
