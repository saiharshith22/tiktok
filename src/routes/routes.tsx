import { lazy } from "react";
import Profile from "../pages/profile/Profile";
import ConsentPage from "../components/consent-page/ConsentPage";
import ThankyouScreen from "../pages/thankyou/ThankyouScreen";

// Lazy load components
const Home = lazy(() => import("../pages/home/Home"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/consent", element: <ConsentPage /> },
  { path: "/thankyou", element: <ThankyouScreen /> },
  { path: "*", element: <NotFound /> }, // 404 Page
];
