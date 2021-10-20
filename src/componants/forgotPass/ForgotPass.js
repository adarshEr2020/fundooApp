import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
export default class ForgotPass extends Component {
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
                <form action="">
                    <TextField id="forgotEmail" label="Phone number or email" variant="outlined"></TextField>
                    <Button className="submit-btn" variant="contained">Next</Button>
                </form>

            </div>


        )
    }
}
