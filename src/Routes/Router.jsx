import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index: true,
            path: "/",
            element: <HomeLayout></HomeLayout>
        },
        {
            path: "/availableFoods",
            element: <AvailableFoods></AvailableFoods>
        }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: "/auth/login",
            element: <Login></Login>
        },
        {
            path: "/auth/register",
            element: <Register></Register>
        }
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
