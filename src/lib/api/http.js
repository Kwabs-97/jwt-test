import axios from "axios";

export async function registerUser(data) {
  try {
    const response = await axios.post(process.env.REGISTER_ENDPOINT, data);
    const data = response.data;
    return data;
  } catch (error) {
    console.log("error registering user", error);
  }
}
