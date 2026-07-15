import { createBrowserRouter, Navigate } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Movie from "../pages/movie/Movie";
import Intro from "../pages/intro/Intro";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:cliente",
    element: <Intro />,
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