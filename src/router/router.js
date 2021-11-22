import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "../componants/signup/SignUp";
import Login from "../componants/login/Login";
import ForgotPass from "../componants/forgotPass/ForgotPass";
import ResetPass from "../componants/forgotPass/ResetPass"
import NoteDashboard from "../componants/dashboard/NoteDashboard";
import Archive from "../componants/dashboard/Archive";
import Trash from "../componants/trash/Trash";
import NotFound from "../componants/NotFound";

function Routers() {
    return (
        <BrowserRouter>
           
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/forgotpass' component={ForgotPass} />
            <Route exact path='/resetpassword' component={ResetPass} />
            <Route exact path='/dashboard' component={NoteDashboard} />
            <Route exact path='/archive' component={Archive} />
            <Route exact path='/trash' component={Trash} />
            <Route component={NotFound}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routers