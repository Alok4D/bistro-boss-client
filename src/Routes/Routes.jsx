import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Ordered from "../Pages/Orderd-Page/Ordered/Ordered";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard-pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllUsers from "../Pages/Dashboard-pages/All-Users/AllUsers";
import AddItems from "../Pages/Dashboard-pages/Add-Items/AddItems";
import AdminRoute from "./Admin-Route/AdminRoute";
import ManageItems from "../Pages/Dashboard-pages/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard-pages/Update-Pages/UpdateItem";
import Payment from "../Pages/Dashboard-pages/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard-pages/Payment-history/PaymentHistory";
import UserHome from "../Pages/Dashboard-pages/User_Home/UserHome";
import AdminHome from "../Pages/Dashboard-pages/Admin-Home/AdminHome";
import Error from "../Pages/Error-page/Error";
import Contact from '../Components/Contact/Contact'
import Reviews from "../Components/Reviews/Reviews";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/menu',
          element: <Menu></Menu>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
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
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      errorElement: <Error></Error>,
      children: [
        // normal user routes
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'review',
          element: <Reviews/>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },




        //admin routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        }
        ,
        {
          path: 'addItems',
          element: <AdminRoute> <AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
         loader: ({params}) => fetch(`https://bistro-boss-server-wheat-one.vercel.app/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
        }
      ]
    }
  ]);