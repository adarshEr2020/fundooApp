import { Button, TextField} from '@material-ui/core';
import '../signup/SignUp.scss'
import React, { Component } from 'react'
import { signup } from '../../services/service';
import { Link } from 'react-router-dom';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            service: 'basic',
            email: '',
            password: '',
            passConfirm: ''
        }
    }

    setFirstName = (event) => {
        this.setState({

            firstName: event.target.value
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
    z
    setConfirmPass = (event) => {
        this.setState({
            passConfirm: event.target.value
        })
    }

    handleSubmit = () => {
        const { firstName, lastName, service, email, password } = this.state
        const obj = { firstName, lastName, service, email, password }
        signup(obj)
            .then((response) => {
                console.log(response)
                alert("you have registered successfully.")
            })
            .catch((error) => {
                console.warn(error)
            })
    }
    render() {
        return (
            <div className="mainDiv" id="signup-main">
                {/* <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    width="75"
                    alt="google.img"
                /> */}
                <h1 className="FundooIcon">Fundoo</h1>
                <h1 className="signup-form">Create your Google Account</h1>

                <div className="row-name">
                    <TextField id="row-fname" label="FirstName" variant="outlined" value={this.state.firstName} onChange={(e) => this.setFirstName(e)} required />
                    <TextField id="row-lname" label="LastName" variant="outlined" value={this.state.lastName} onChange={(e) => this.setLastName(e)} required />
                </div>
                <div className="row-email">
                    <TextField style={{ width: '100%' }} id="row-femail" label="Email" variant="outlined" value={this.state.email} onChange={(e) => this.setEmail(e)} />
                    <p className="email-text">You can use letters,numbers &#38; periods</p>
                    <div className="text2">
                        <a href="_blank">Use my current email address instead</a>
                    </div>
                </div>
                <div className="row-name">
                    <TextField id="row-fpass-" type="password" label="Password" variant="outlined" value={this.state.password} onChange={(e) => this.setPassword(e)} />
                    <TextField id="row-cfpass" label="Comfirm" variant="outlined" value={this.state.passConfirm} onChange={(e) => this.setConfirmPass(e)} />

                </div>
                <div>
                    <p> Use 8 or more characters with a mix of letters, numbers &amp; symbols</p>
                </div>
                <div className="signup-btn">
                    <Link
                        underline="none"
                        to="/login">
                        Sign in instead
                    </Link>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>SiginUP</Button>
                </div>

            </div>
        );
    }
}

export default SignUp