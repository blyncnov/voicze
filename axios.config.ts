import axios, { AxiosInstance } from "axios";

export const voicze_config: AxiosInstance = axios.create({
  baseURL: "https://voicze-api.onrender.com/api/v1",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default voicze_config;
