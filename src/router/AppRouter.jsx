import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import {
    FullPageLayout,
    NoMenuLayout,
} from "../components/layouts/Layouts";
import Recipe from "../components/recipe/Recipe";

/*<Switch>
    <Router>
        <Route path="/" component={NoMenuLayout(Login)} />
        <Route path="/home/" component={FullPageLayout(Home)} />          
    </Router>
</Switch>*/

function AppRouter() {
    return (

        <Router>
            <Route path="/"         component={NoMenuLayout(Login)} />
            <Route path="/home/"    component={FullPageLayout(Home)} />
            <Route path="/recipe/"  component={FullPageLayout(Recipe)} />
        </Router>

    );
}

export default AppRouter;