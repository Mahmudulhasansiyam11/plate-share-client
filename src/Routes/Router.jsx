import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";

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
            element: <PrivateRoute>
                <AvailableFoods></AvailableFoods>
            </PrivateRoute>
        },
        {
            path: "/addFood",
            element: <PrivateRoute>
                <AddFood></AddFood>
            </PrivateRoute>
        },
        {
            path: "/manageMyFoods",
            element: <PrivateRoute>
                <ManageMyFoods></ManageMyFoods>
            </PrivateRoute>
        },
        {
            path: "/myFoodRequest",
            element: <PrivateRoute>
                <MyFoodRequest></MyFoodRequest>
            </PrivateRoute>
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
