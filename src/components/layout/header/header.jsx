import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { StyledSection } from "./style";

function Header({ pageUrl }) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;
