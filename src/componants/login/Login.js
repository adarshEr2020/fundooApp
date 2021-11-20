import React, { Component } from 'react'
import { login } from '../../services/service'
import './Login.scss'
import { Button, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";
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
    login(obj)
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          this.props.history.push("/dashboard")
        }        
        
      })
      .catch((error) => {
        console.warn(error)
      })

  }

  render() {
    return (
      <div id="main" className="mainDiv">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" width="75" alt="google.img" /> */}
       <h1 className="FundooIcon">Fundoo</h1>
        <h1>Sign in</h1>
        <h3>Use your Google Account</h3>
        <div className="Fields">
          <div className="input-Fs">
            <TextField
              id="outlined-basic"
              label="Email or phone"
              variant="outlined"
              value={
                this.state.value
              }
              onChange={
                this.saveEmail
              }
            />
          </div>
          <div className="input-Fs">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={
                this.state.value
              }
              onChange={
                this.savePassword
              }
            />
          </div>
        </div>
        <div className="forget">
          <div className="forgot-email">
            <Link
              underline="none"
              to="" className="Fg-email">
              Forgot email
            </Link>
          </div>
          <div className="forgot-pass">
            <Link
              underline="none"
              to="/forgotpass" className="Fg-email">
              Forgot password
            </Link>
          </div>
        </div>
        <div className="text">
          <p>
            Not your computer? Use Guest mode to sign in privately.
          </p>
          <Link
            underline="none"
            to="">
            Learn more
          </Link>
        </div>
        <div className="signup">
          <Link
            underline="none"
            to="/signup">
            Create an account
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={
              this.loginSubmit
            }>Login
          </Button>
        </div>
      </div >
    )
  }
}

export default Login
