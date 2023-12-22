import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MainLayout from "../Layout/MainLayout";

const MainRoutes = createBrowserRouter([
  {
    index: true,
    element: <MainLayout></MainLayout>,
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
