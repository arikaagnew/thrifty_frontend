import { Outlet } from "react-router-dom";

import Layout from "./Components/Layout";
// import Dashboard from "./pages/Dashboard";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import UserProfile from "./Pages/UserProfile";
import Post from "./Pages/Post";
import Register from "./Pages/Register";

const MainLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <HomePage />,
        path: "/home",
      },
      {
        element: <UserProfile />,
        path: "/profile",
      },
      {
        element: <Post />,
        path: "/post",
      },
      {
        element: <Register />,
        path: "/register",
      },
    //   {
    //     path: "/404",
    //     element: <FourOhFour />,
    //   },
    //   {
    //     path: "*",
    //     element: <Navigate to="/404" replace />,
    //   },
    ],
  },
];