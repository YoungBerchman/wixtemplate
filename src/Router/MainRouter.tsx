import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../page/Home";
import Landing from "../page/Landing";
import Login from "../page/Login";
import Signup from "../page/Signup";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Landing",
        element: <Landing />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
]);
