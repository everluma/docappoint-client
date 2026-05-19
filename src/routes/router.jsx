import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import AllAppointments from "../pages/AllAppointments/AllAppointments";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import MyBookings from "../pages/Dashboard/MyBookings";
import MyProfile from "../pages/Dashboard/MyProfile";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointments",
        element: <AllAppointments />,
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
    ],
  },
]);

export default router;