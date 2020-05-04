import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import List from "../components/List/List";
import Login from "../components/login/Login";
import {
    //FullPageLayout,
    NoMenuLayout,
} from "../components/layouts/Layouts";

/**
            <Route path="/mantenedor/" component={FullPageLayout(List)} />
            */
function AppRouter() {
    return (
        <Router>
            
            <Route path="/login" component={NoMenuLayout(Login)} />
        </Router>
    );
}
export default AppRouter;