import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: ([
      {
        index : true,
        element: <Home></Home>
      }
    ])
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
