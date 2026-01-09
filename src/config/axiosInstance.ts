// src/api/axiosInstance.ts
import axios, { AxiosError } from "axios";
import {
  getToken,
  getRefreshToken,
  saveToken,
  saveRefreshToken,
  clearToken,
} from "@/libs/auth";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  failedQueue = [];
};

const refreshToken = async () => {
  const token = getRefreshToken();
  if (!token) throw new Error("No refresh token");

  const res = await axios.post(`${apiUrl}/auth/refresh`, {
    refresh_token: token,
  });

  // backend kamu balikin { access_token: "...", refresh_token: "..." } biasanya
  saveToken(res.data.access_token);
  if (res.data.refresh_token) saveRefreshToken(res.data.refresh_token);

  return res.data.access_token;
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<any>) => {
    const originalRequest: any = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch(Promise.reject);
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshToken();
        axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;
        processQueue(null, newToken);

        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        clearToken();

        if (typeof window !== "undefined") {
          window.location.href = "auth/login";
        }

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
