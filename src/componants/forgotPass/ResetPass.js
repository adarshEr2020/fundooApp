import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import { resetpass } from '../../services/service'
import './ForgotPass.scss'
export default class ForgotPass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: ''
        }
    }

    saveNewPass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submit = () => {

        const { password } = this.state
        const obj = { password }
        resetpass(obj)
            .then((response) => {
                console.log(response.data.id)
                alert("your password changed successfully.")
            })
           .catch((error) => {
                console.warn("resetpass"+ error)
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
                <h2>Reset password</h2>
                <p>Select your new password and enter below</p>
                <div className="em-field">
                    <TextField style={{ width: '100%' }} id="resetEmail" label="New password" variant="outlined" value={this.state.pass} onChange={(e) => this.saveNewPass(e)}></TextField>
                </div>
                <div className="sub-btn">
                    <Button variant="contained" color="primary" onClick={this.submit}>Submit</Button>
                </div>
            </div>
        )
    }
}
