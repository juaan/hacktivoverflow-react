import axios from 'axios';
import { LOGIN, URL } from './constants';


const loginSuccess = (datauser) => {
    window.localStorage.setItem('token', datauser.token);
    window.localStorage.setItem('username', datauser.username);
    return {
      type: LOGIN,
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
