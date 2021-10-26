import axios from "axios";
const config={
    headers:{
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('fundooSigninToken')
    }
}

export const login = async (obj) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj)
    localStorage.setItem('fundooSigninToken', response.data.id)
    console.log(response.data.id);
    return response
}

export const signup = async (obj) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj)
    return response
}



export const forgotpass = async (obj) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset', obj)
    return response
}

export const resetpass = async (obj) => {
    
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password', obj,config) 
    return response
}

// export const test = async () => {
//     let response = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
//     console.log(response);
// }