import { LoginFields, RegisterFields } from "../types/fields";
import api, { DefaultResponse } from "./api";

async function login(fields: LoginFields) {
  try {
    const response = await api.post("login", { ...fields });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

async function register(fields: RegisterFields) {
  try {
    const response = await api.post("register", { ...fields });
    return response.data as DefaultResponse;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

export default {
  login,
  register,
};
