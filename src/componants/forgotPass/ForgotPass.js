import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import { forgotpass } from '../../services/service'
import './ForgotPass.scss'
export default class ForgotPass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    saveEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }


    forgetEmail = () => {

        const { email } = this.state
        const obj = { email }
        forgotpass(obj)
            .then((response) => {
                console.log(response.data)
                alert("Set password link sent to you registered email,please check.")
            })
            .catch((error) => {
                console.warn(error)
            })
    }
    render() {
        return (

            <div className="mainDiv">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    width="75"
                    alt="google.img"
                />
                <h2>Find your email</h2>
                <p>Enter your phone number or recovery email</p>
                <div className="em-field">
                    <TextField style={{ width: '100%' }} id="forgotEmail" label="Phone number or email" variant="outlined" value={this.state.email} onChange={(e) => this.saveEmail(e)}></TextField>
                </div>
                <div className="sub-btn">
                    <Button variant="contained" color="primary" onClick={this.forgetEmail}>Next</Button>
                </div>
            </div>
        )
    }
}
