import React, { useLayoutEffect } from "react";
import {
  HeaderContainer,
  NavInfo,
  NavButtons,
  Button,
} from "./styled.components";

const Header: React.FC = () => {
  useLayoutEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.clientHeight}px`
      );
    }
  }, []);
  return (
    <HeaderContainer id="header" role="banner" aria-label="Main header">
      <NavInfo tabIndex={0} aria-label="SecureRecover, Company Name">
        SecureRecover
      </NavInfo>
      <NavButtons role="navigation" aria-label="Main navigation">
        <Button aria-label="Get help from SecureRecover support">Help</Button>
        <Button aria-label="Contact SecureRecover support">Contact</Button>
      </NavButtons>
    </HeaderContainer>
  );
};

export default Header;
