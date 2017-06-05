import { GET_QUESTION } from '../actions/constants';

const initialState = [
  {
    title: 'mantab soul',
    question: 'kemantaban ilahi'
  }
]

const questionReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_QUESTION: {
      return state
    }
    default: return state

  }
}

export default questionReducer;
