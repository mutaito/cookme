import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import {
    FullPageLayout,
    NoMenuLayout,
} from "../components/layouts/Layouts";


function AppRouter() {
    return (
        <Router>
            <Route path="/" component={NoMenuLayout(Login)} />
            <Route path="/home/" component={FullPageLayout(Home)} />          
        </Router>
    );
}

export default AppRouter;