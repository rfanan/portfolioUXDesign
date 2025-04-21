import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getShots = async () => {
  try {
    const response = await axios.get(`${baseURL}/user/shots?access_token=`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.setItem("dribbbleShots", JSON.stringify(response.data));
    return response.data;
  } catch {
    console.error("error fecthing shots :", error);
    return null;
  }
};
export const getUser = async () => {
  try {
    const response = await axios.get(`${baseURL}/user?access_token=`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch {
    console.error("error fecthing shots :", error);
    return null;
  }
};
