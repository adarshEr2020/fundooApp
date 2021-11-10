import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "../componants/signup/SignUp";
import Login from "../componants/login/Login";
import ForgotPass from "../componants/forgotPass/ForgotPass";
import ResetPass from "../componants/forgotPass/ResetPass"
import NoteDashboard from "../componants/dashboard/NoteDashboard";

function RouterDom() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/forgotpass' component={ForgotPass} />
                <Route path='/resetpassword' component={ResetPass} />
                <Route path='/dashboard' component={NoteDashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterDom