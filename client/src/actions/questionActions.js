import axios from 'axios';

import { POST_QUESTION,URL } from './constants';


const postQuestionSuccess = (question) => ({
  type:POST_QUESTION,
  payload: question
});

export const postQuestion = (question) => (
  dispatch => (
    axios.post(URL+'questions', question, { headers: {'token': localStorage.getItem('token')} })
         .then((res) => dispatch(postQuestionSuccess(res.data)))
         .catch((err) => {console.log(err)})
  )
)
