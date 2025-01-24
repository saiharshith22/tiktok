import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 0px;
  }
`;
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
    >
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
