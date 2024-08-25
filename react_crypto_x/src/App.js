import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Support from "./components/Support/Support";
import Transaction from "./components/Transactions/Transaction";

const router = createBrowserRouter([
  {
    path:"/",
    element: <DashBoard/>
  },
  {
    path:"/support",
    element:<Support/>

  },
  {
    path:"/transaction",
    element:<Transaction/>
  }
])


function App() {
 return (
  <>
  <RouterProvider router={router}/>
  </>
 )
}

export default App;
