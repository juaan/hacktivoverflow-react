import { GET_QUESTION, POST_QUESTION } from '../actions/constants';

const initialState = []

const questionReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_QUESTION: {
      return state
    }
    case POST_QUESTION:{
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state

  }
}

export default questionReducer;
