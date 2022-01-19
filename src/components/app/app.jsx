import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import Order from "../pages/order/order";
import { AppRoute } from "/src/const";
import advantages from "../../mocks/advantages";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage advantages={advantages} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.ORDER}>
            <PageWrapper pageUrl={AppRoute.ORDER}>
              <Order products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
