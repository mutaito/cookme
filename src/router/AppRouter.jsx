import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/login/Login";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import Recipe from "../components/recipe/Recipe";
import Home from "../components/home/Home";
import {
  //FullPageLayout,
  NoMenuLayout,
} from "../components/layouts/Layouts";


function PrivateRoute({ children, ...rest }) {
  console.log("rest")
  console.log(rest)
  console.log("children")
  console.log(children)
  const auntenticado = (localStorage.getItem('auntenticado')) ? true : false;
  console.log("auntenticado")
  console.log(auntenticado)
  return (
    <Route
      {...rest}
      render={
        ({ location }) =>
        auntenticado ?
          (children) :
          (<Redirect to={{ pathname: "/", state: { from: location } }} />)
      }
    />
  );
}

function AppRouter() {
  return (

    <Router>
      <Route path="/" exact={true} component={NoMenuLayout(Login)} />
      <Route path="/about" exact={true} component={NoMenuLayout(About)} />

      <Switch>
        <PrivateRoute path="/recipe">
          <Menu />
          <Recipe />
        </PrivateRoute>
        <PrivateRoute path="/home">
          <Menu />
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>

  );
}
export default AppRouter;
/*
<Route path="/about" exact={true} component={FullPageLayout(About)} />
 */