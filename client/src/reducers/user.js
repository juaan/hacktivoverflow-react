import { LOGIN } from '../actions/constants';


const initialState = {
  token: '',
  shouldRedirectSignIn: false,
  warning: ''
}

const loginUser = (payload) => {
  console.log('from reducer',payload)
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: return loginUser(action.payload);
    default: return state;
  }
}

export default userReducer;
