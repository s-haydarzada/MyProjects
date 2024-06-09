import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Layout/MainLayout/Pages/Home/home";
import Checkout from "./Layout/MainLayout/Pages/Checkout/checkout";
import Register from "./Layout/MainLayout/Pages/Register/register";
import Viewcart from "./Layout/MainLayout/Pages/ViewCart/viewcart";
import Detail from "./Layout/MainLayout/Pages/Detail/detail";
import Shop from "./Layout/MainLayout/Pages/Shop/shop";
import Login from "./Layout/MainLayout/Pages/Login/login";
import Dashboard from "./Layout/DashboardLayout/dashboard";
import Orders from "./Layout/DashboardLayout/Pages/Orders";
import Products from "./Layout/DashboardLayout/Pages/Products";
import Customers from "./Layout/DashboardLayout/Pages/Customers";
import DashboardPage from "./Layout/DashboardLayout/Pages/DashboardPage";
import ProtectedRoute from "./helpers/ProtectedRoute";
import NotFoundPage from './components/NotFoundPage/index';
import Brands from "./Layout/DashboardLayout/Pages/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Detail />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "viewcart",
        element: <Viewcart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<ProtectedRoute><Dashboard /></ProtectedRoute> ,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "staff",
        element: <Customers />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};
