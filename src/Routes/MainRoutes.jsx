import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const MainRoutes = createBrowserRouter([
  {
    index: true,
    element: <Home></Home>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/logIn",
    element: <Login></Login>,
  },
]);

export default MainRoutes;
