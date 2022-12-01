import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export type DefaultResponse = {
  data: string;
  success: boolean;
};

export default api;
