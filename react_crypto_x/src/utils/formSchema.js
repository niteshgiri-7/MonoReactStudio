import * as Yup from "yup";

export const signUpFormSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter first name"),
    lastName: Yup.string().required("Enter last name"),
    email: Yup.string().email("Invalid email").required("Enter email"),
    password: Yup.string().required("Enter password"),
    repeatPassword: Yup.string()
      .required("Retype password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

 export  const signInFormSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("Enter email"),
    password: Yup.string().required("Enter password"),
  });