import { lazy } from "react";
import Profile from "../pages/profile/Profile";

// Lazy load components
const Home = lazy(() => import("../pages/home/Home"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> }, // 404 Page
];
