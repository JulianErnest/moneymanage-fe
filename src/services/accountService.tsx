import { GettingStartedFields } from "../types/fields";
import api, { DefaultResponse } from "./api";

async function createAccount(fields: GettingStartedFields) {
    try {
      const response = await api.post("/account/"+fields.id, { ...fields }, 
      {headers: {
        Authorization: "Bearer " + fields.token
      }}
      );
      console.log(response);
      return response.data as DefaultResponse;
      
    } catch (error: any) {
      console.log(error);
      return error.response.data;
    }
  }

  export default{
    createAccount
  }