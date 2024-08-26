import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Support from "./components/Support/Support";
import Transaction from "./components/Transactions/Transaction";
import SignUp from "./components/Entrance/SignUp";
import EmailVerify from "./components/Entrance/EmailVerify";
import SignIn from "./components/Entrance/SignIn";
import ForgotPw from "./components/ForgotPassword/ForgotPw";
import ResetPw from "./components/ForgotPassword/ResetPw";
import EmailSent from "./components/ForgotPassword/EmailSent";
import ResetDone from "./components/ForgotPassword/ResetDone";
import SuccessfulSignUp from "./components/Entrance/SuccessfulSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path:"/email-verify",
    element:<EmailVerify/>
  },
  {
    path:"/signUp-successful",
    element:<SuccessfulSignUp/>,
  },
  {
    path:"/login",
    element:<SignIn/>,
  },
  {
    path:"/forgot-password",
    element:<ForgotPw/>
  },
  {
    path:"/email-sent",
    element:<EmailSent/>,
  },
  {
    path:"/reset-done",
    element:<ResetDone/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
