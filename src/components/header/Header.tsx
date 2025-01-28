import { useEffect } from "react";
import { LogoText, NavHeader } from "./styled.components";

const Header = () => {
  useEffect(() => {
    const headerHeight = document.getElementById("header")?.offsetHeight ?? 0;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, []);
  return (
    <NavHeader id="header">
      <LogoText>TiktokRecover</LogoText>
    </NavHeader>
  );
};

export default Header;
