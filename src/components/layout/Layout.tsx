import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout() {
  const MainContent = styled.main`
    padding-top: var(--header-height);
  `;
  return (
    <div>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  );
}
