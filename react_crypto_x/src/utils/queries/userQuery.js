import Axios from "../axios";

const URL_USER = "/user";

export const signInUser = async ({ email, password }) => {
  try {
    console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

    const { data } = await Axios.post(`${URL_USER}/signin`, {
      email,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
    console.error("Error during sign-in:", error);
    throw Error(error.response.data.message);
  }
};

export const signUpUser = async (user) => {
  console.log(user);
  try {
    const { data } = await Axios.post(`${URL_USER}/signup`, user);
    return data;
  } catch (error) {
    console.error('SignUp Error:', error.response?.data || error.message);
    
    throw new Error(error.response?.data?.message || 'An unexpected error occurred');
  }
};

