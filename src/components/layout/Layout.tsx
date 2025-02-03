import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect } from "react";

export default function Layout() {
  const MainContent = styled.main`
    padding-top: var(--header-height);
  `;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header /> {/* Pass signOut to Header */}
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  );
}
