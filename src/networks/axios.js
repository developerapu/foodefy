import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const rootUrl = "http://3.109.203.71:8080";

export const useAxios = ()=> {
  const fetchApi = async (
    url,
    method = "get",
  ) => {
    try {
      const response = await axios({
        url: url,
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return handleSuccessResponse(response);
    } catch (err) {
      throw handleError(err);
    }
  };
  
  const handleSuccessResponse = (response) => {
    return {
      data: response.data,
    };
  };
  
  const handleError = (error) => {
      console.log(error);
      return error.response.data;
  };
  return fetchApi;
}
