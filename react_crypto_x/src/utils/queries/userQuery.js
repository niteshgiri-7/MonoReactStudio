import Axios from "../axios";

const URL_USER = "/user";

export const signInUser = async ({ email, password }) => {
  try {
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
    console.error("SignUp Error:", error.response?.data || error.message);

    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
};

export const sendVerificationEmail = async (email) => {
  console.log("email", email);
  try {
    const { data } = await Axios.post(`${URL_USER}/send-verification-mail`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response?.data?.message || "An unexpected error occured");
  }
};

export const verifyEmailAddressSignUp = async (token) => {
  console.log("token", token);
  try {
    const { data } = await Axios.post(`${URL_USER}/verfiy-user-mail`, {
      token,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error.response?.data?.message || "An unexpected error occured");
  }
};

export const forgotPassword = async (email) => {
  try {
    const { data ,status} = await Axios.post(`${URL_USER}/forgot-password`, {
      email,
    });
   console.log(status)
    return data;
  } catch (error) {
    console.log(error)
    const err = error.response;
    console.log(err?.status);
    if (err?.status === 404) {
      throw Error("Unregistered Email");
    }
    throw Error(err?.data?.message || "An unexpected error occured");
 
  }
};

export const resetPassword = async ({token,password}) => {
  try {
    console.log(token,password);
    const { data } = await Axios.post(`${URL_USER}/verify-forgot-mail`, {
    token,password
    });
    return data;
  } catch (error) {
    throw Error(error.response?.data?.message);
  }
};
