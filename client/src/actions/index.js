import axios from 'axios';

import { GET_QUESTION, LOGIN, URL } from './constants';


const loginSuccess = (datauser) => ({
  type: LOGIN,
  payload: datauser
})

export const login = (datauser) => (
  dispatch => (
    axios.post(URL+'users/login', datauser)
    .then((res) => loginSuccess(res.data))
    .catch((err) => {console.log(err)})
  )
)
