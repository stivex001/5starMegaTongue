import axios from "axios";
import { apiBaseUrl } from "../Store/apiBaseUrl";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage?.getItem("user"));
const token = user?.data?.access_token;


export const getApiKey = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/getapikey`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response?.data?.status === true) {
      return response?.data?.message;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    toast.error(error?.data?.message || error.message);
  }
};
