import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const rootUrl = "http://3.109.203.71:8080";

export const useAxios = ()=> {
const {logOut} = useContext(AppContext);
  const fetchApi = async (
    url,
    method = "get",
    data = null,
    token,
  ) => {
    try {
      const response = await axios({
        url: `${rootUrl}/${url}`,
        method: method,
        headers: {
          "Content-Type": "application/json",
          ...(token && {"x-access-token": token})
        },
        ...(data && {data: data})
      });
  
      return handleSuccessResponse(response);
    } catch (err) {
      throw handleError(err);
    }
  };
  
  const handleSuccessResponse = (response) => {
    return {
      data: response.data,
    //   headers: response.headers
    };
  };
  
  const handleError = (error) => {
      console.log(error);
      return error.response.data;
  };
  return fetchApi;
}
