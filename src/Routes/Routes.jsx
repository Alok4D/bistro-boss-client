import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Ordered from "../Pages/Orderd-Page/Ordered/Ordered";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/home',
            element: <Home></Home>,
        },
        {
          path: '/menu',
          element: <Menu></Menu>,
        },
        {
          path: '/order/:category',
          element: <Ordered></Ordered>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>,
        }
      ]
    },
  ]);