import axios, { AxiosInstance } from "axios";

export const voicze_config: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default voicze_config;
