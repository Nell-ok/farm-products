import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Main } from "./style";

function PageWrapper({ pageUrl, children }) {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
