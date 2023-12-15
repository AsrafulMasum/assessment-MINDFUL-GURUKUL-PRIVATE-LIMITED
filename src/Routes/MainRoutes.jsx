import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const MainRoutes = createBrowserRouter([
  {
    index: true,
    element: <Home></Home>,
  },
  {
    path: "/logIn",
    element: <Login></Login>,
  },
]);

export default MainRoutes;
