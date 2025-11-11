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
import MyProfile from "../Pages/MyProfile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

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
            element: <AvailableFoods></AvailableFoods>,
            loader: () => fetch('http://localhost:3000/foods'),
        },
        {
            path: "/addFood",
            element: <PrivateRoute>
                <AddFood></AddFood>
            </PrivateRoute>
        },
        {
            path: "/food/:id",
            element: <PrivateRoute>
                <FoodDetails></FoodDetails>
            </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`),
        },
        {
            path: "/update-food/:id",
            element: <PrivateRoute>
                <UpdateFood></UpdateFood>
            </PrivateRoute>,
             loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`),
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
        },
        {
            path: "/myProfile",
            element: <PrivateRoute>
                <MyProfile></MyProfile>
            </PrivateRoute>
        },
        {
            path: "/updateProfile",
            element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
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
