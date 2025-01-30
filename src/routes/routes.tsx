import { lazy } from "react";

// Lazy load components
const Home = lazy(() => import("../pages/home/Home"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const ConsentPage = lazy(
  () => import("../components/consent-page/ConsentPage")
);
const ThankyouScreen = lazy(() => import("../pages/thankyou/ThankyouScreen"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/consent", element: <ConsentPage /> },
  { path: "/thankyou", element: <ThankyouScreen /> },
  { path: "*", element: <NotFound /> }, // 404 Page
];
