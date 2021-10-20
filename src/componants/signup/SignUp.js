import { Button, TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import '../signup/SignUp.css'
import React, { Component } from 'react'
import { signup } from '../../services/service';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passConfirm: ''
        }
    }

    setFirstName = (event) => {
        console.log(event.target.value);
        this.setState({

            firstName: event.target.value

        },() =>{
            console.log(this.state);
        })
        
    }


    setLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }


    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    setConfirmPass = (event) => {
        this.setState({
            passConfirm: event.target.value
        })
    }

    handleSubmit() {
        console.log("handle"+this.state);
        // const { firstName, lastName, email, password, passConfirm } = this.state

        // const obj = { firstName, lastName, email, password, passConfirm }
        // signup(obj);
        // console.log("obj");
    }
    render() {
        return (
            <div className="mainDiv" id="signup-main">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    width="75"
                    alt="google.img"
                />
                <h1 className="signup-form">Create your Google Account</h1>
                
                    <div className="row-name">
                        <TextField id="row-fname" label="FirstName" variant="outlined" value={this.state.firstName} onChange={(e)=>this.setFirstName(e)} required />
                        <TextField id="row-lname" label="LastName" variant="outlined" value={this.state.lastName} onChange={(e)=>this.setLastName(e)} required />
                    </div>
                    <div className="row-email">
                        <TextField id="row-femail" label="Email" variant="outlined" value={this.state.email} onChange={(e)=>this.setEmail(e)} />
                        <p className="email-text">You can use letters,numbers &#38; periods</p>
                        <div className="text2">
                            <a href="_blank">Use my current email address instead</a>
                        </div>
                    </div>
                    <div className="row-name">
                        <TextField id="row-fpass-" type="password" label="Password" variant="outlined" value={this.state.password} onChange={(e)=>this.setPassword(e)} />
                        <TextField id="row-cfpass" label="Comfirm" variant="outlined" value={this.state.passConfirm} onChange={(e)=>this.setConfirmPass(e)} />

                    </div>
                    <div>
                        <p> Use 8 or more characters with a mix of letters, numbers &amp; symbols</p>
                    </div>
                    <div className="signup-btn">
                        <Link href="" underline="none">Sign in instead</Link>
                        <Button className="signup-btn-button" variant="contained" onClick={this.handleSubmit}>SiginUP</Button>
                    </div>
               
            </div>
        );
    }
}

export default SignUp   