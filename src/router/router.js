import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "../componants/signup/SignUp";
import Login from "../componants/login/Login";
import ForgotPass from "../componants/forgotPass/ForgotPass";
import ResetPass from "../componants/forgotPass/ResetPass"
import NoteDashboard from "../componants/dashboard/NoteDashboard";
import Archive from "../componants/dashboard/Archive";
import Trash from "../componants/trash/Trash";

function Routers() {
    return (
        <BrowserRouter>
        <Route exact path='/' component={Login}/>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
            <Switch>
                <Route path='/forgotpass' component={ForgotPass} />
                <Route path='/resetpassword' component={ResetPass} />
                <Route path='/dashboard' component={NoteDashboard} />
                <Route path='/archive' component={Archive} />
                <Route path='/trash' component={Trash} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers