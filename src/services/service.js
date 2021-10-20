import axios from "axios";
const url = 'http://fundoonotes.incubation.bridgelabz.com/api'

export const login = async (obj) => {
    let response = await axios.post({url}+'/user/login', obj)
    console.log(response)
    localStorage.setItem('fundooToken', response.data.id)
    return response
}

export const signup = async (obj) => {
    let response = await axios.post({url}+'/user/userSignUp', obj)
    console.log(response)
    localStorage.setItem('fundooToken', response)
    return response
}
