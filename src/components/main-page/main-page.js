import React from "react";
import ProductList from "../product-list/product-list";
import Navbar from "../navbar/navbar";
import "./main-page.css";
import DetailPage from "../detail-page/detail-page";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

export default class MainPage extends React.Component {
  render() {
    return <div className="main-page-wrapper">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={ProductList} />
            <Route path={"/details/:id"} component={DetailPage}/>
          </Switch>
        </BrowserRouter>
    </div>;
  }
}
