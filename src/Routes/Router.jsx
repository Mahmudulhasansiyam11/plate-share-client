import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Layouts/Root";
import AddFood from "../Pages/AddFood/AddFood";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Loading from "../Pages/Loading/Loading";
import Login from "../Pages/Login/Login";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Register from "../Pages/Register/Register";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("https://plate-share-api-server.vercel.app/highest-food"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch("https://plate-share-api-server.vercel.app/foods"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://plate-share-api-server.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://plate-share-api-server.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },

      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
