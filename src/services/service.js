import axios from "axios";
const url = 'http://fundoonotes.incubation.bridgelabz.com/api';

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('fundooSigninToken')
    }
}

export const login = async (obj) => {
    let response = await axios.post(`${url}/user/login`, obj)
    localStorage.setItem('fundooSigninToken', response.data.id)
    console.log(response.data.id);
    return response
}

export const signup = async (obj) => {
    let response = await axios.post(`${url}/user/userSignUp`, obj)
    return response
}



export const forgotpass = async (obj) => {
    let response = await axios.post(`${url}/user/reset`, obj)
    return response
}

export const resetpass = async (obj) => {

    let response = await axios.post(`${url}/user/reset-password`, obj, config)
    return response
}

export const takenote = async (obj) => {
    let response = await axios.post(`${url}/notes/addNotes`, obj, config)
    return response;
}

export const requestNotesData = async () => {
    let response = await axios.get(`${url}/notes/getNotesList`, config)
    return response.data.data.data;
}

export const getArchiveNote = async () => {
    let response = await axios.get(`${url}/notes/getArchiveNotesList`, config)
    return response.data.data;
}

export const addTorchiveNotes = async (obj) => {
    console.log(obj);
    let response = await axios.post(`${url}/notes/archiveNotes`, obj, config)
    return response.data;
}