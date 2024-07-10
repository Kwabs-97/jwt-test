import axios from "axios";
export async function registerUser(data) {
  try {
    const response = await axios.post("http://localhost:8080/register", data);
    return response;
  } catch (error) {
    console.log("error registering user", error);
    return error;
  }
}
export async function userLogin(data) {
  try {
    const response = await axios.post("http://localhost:8080/register", data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
