import axios from 'axios';

import { POST_QUESTION,URL , GOT_QUESTIONS } from './constants';


const postQuestionSuccess = (question) => ({
  type:POST_QUESTION,
  payload: question
});

const getAllQuestionsSuccess = (questions) => ({
  type: GOT_QUESTIONS,
  payload: questions
});

export const postQuestion = (question) => {
  return dispatch => (
    axios.post(URL+'questions', question, { headers: {'token': localStorage.getItem('token')} })
         .then((res) => {dispatch(postQuestionSuccess(res.data) ) ; console.log("1 " ,res); })
         .catch((err) => {console.log(err)})
  )
}

export const getAllQuestions = (page) => (
  dispatch => (
    axios.get(URL+'questions', page, { headers: {'token': localStorage.getItem('token')} })
         .then((res) => { dispatch(getAllQuestionsSuccess(res.data) ); console.log(res); })
         .catch((err) => {console.log(err)})
  )
)
