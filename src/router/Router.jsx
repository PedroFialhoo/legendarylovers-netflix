import { createBrowserRouter, Navigate } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Movie from "../pages/movie/Movie";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:cliente",
    element: <Navigate to="login" replace />,
  },
  {
    path: "/:cliente/login",
    element: <Login />,
  },
  {
    path: "/:cliente/home",
    element: <Home />,
  },
  {
    path: "/:cliente/movie/:id",
    element: <Movie />,
  },
]);

export default Router;