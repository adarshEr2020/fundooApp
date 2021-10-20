import Login from './componants/login/Login'
import SignUp from './componants/signup/SignUp'
import ForgotPass from './componants/forgotPass/ForgotPass'

import React, { Component } from 'react'
class App extends Component {
    render() {
        return (
            <div>
                {/* <Login /> */}
                <SignUp />
                {/* < ForgotPass/> */}
            </div>
        )
    }
}

export default App
