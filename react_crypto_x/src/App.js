import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Support from "./components/Support/Support";
import Transaction from "./components/Transactions/Transaction";
import SignUp from "./components/Entrance/SignUp";
import RegisterEmail from "./components/Entrance/RegisterEmail";
import SignIn from "./components/Entrance/SignIn";
import ForgotPw from "./components/ForgotPassword/ForgotPw";
import ResetPw from "./components/ForgotPassword/ResetPw";
import EmailSent from "./components/ForgotPassword/EmailSent";
import ResetDone from "./components/ForgotPassword/ResetDone";
import SuccessfulSignUp from "./components/Entrance/SuccessfulSignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
    path: "/register-email/:email",
    element: <RegisterEmail />,
  },
  {
    path: "/email-verify/:token",
    element: <SuccessfulSignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPw />,
  },
  {
    path: "/email-sent",
    element: <EmailSent />,
  },
  {
    path: "/reset-password",
    element: <ResetPw />,
  },
  {
    path: "/reset-done",
    element: <ResetDone />,
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
