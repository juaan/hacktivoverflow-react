import axios from 'axios';
import { LOGIN, SIGNUP, URL, LOGOUT } from './constants';


const loginSuccess = (datauser) => {
    window.localStorage.setItem('token', datauser.token);
    window.localStorage.setItem('username', datauser.username);
    return {
      type: LOGIN,
      payload: datauser
    }
}

const signupSuccess = (datauser) => {
  window.localStorage.setItem('token', datauser.token);
  window.localStorage.setItem('username', datauser.username);
  return {
    type: SIGNUP,
    payload: datauser
  }
}

export const login = (datauser) => (
  dispatch => (
    axios.post(URL+'users/login', datauser)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => {console.log(err)})
  )
)

export const signup = (datauser) => (
  dispatch => (
    axios.post(URL+'users/signup', datauser)
    .then((res) => dispatch(signupSuccess(res.data)))
    .catch((err) => {console.log(err)})
  )
)

export const logout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('username')
  
  return ({
    type: LOGOUT
  })
}
