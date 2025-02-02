import { lazy } from "react";
import OrderPlacement from "../pages/order-confirmation-page/OrderConfirmationPage";
import PricingScreen from "../pages/pricing-page/PricingScreen";

// Lazy load components
const Home = lazy(() => import("../pages/home/Home"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const ConsentPage = lazy(() => import("../pages/consent/consent"));
const ThankyouScreen = lazy(() => import("../pages/thankyou/ThankyouScreen"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/pricing", element: <PricingScreen /> },
  { path: "/orderplacement", element: <OrderPlacement /> },
  { path: "/consent", element: <ConsentPage /> },
  { path: "/thankyou", element: <ThankyouScreen /> },
  { path: "*", element: <NotFound /> }, // 404 Page
];
