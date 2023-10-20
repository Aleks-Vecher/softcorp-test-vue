import axios, {
  type AxiosInstance,
  type CreateAxiosDefaults,
  type AxiosError,
} from "axios";

function creareAxios(options: CreateAxiosDefaults = {}): AxiosInstance {
  return axios.create({ ...options });
}

export const localApi = creareAxios({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

localApi.interceptors.request.use((config) => {
  return config;
});

localApi.interceptors.response.use(undefined, (error: any) =>
  errorHandlerInterceptorRes(error)
);

function errorHandlerInterceptorRes(error: AxiosError) {
  const statusCode = error.response?.status;
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }
  return Promise.reject(error);
}
