import { LOGIN } from '../actions/constants';


const initialState = {
  token: '',
  username: '',
  shouldRedirectSignIn: false,
  warning: ''
}

const loginUser = (payload) => {
  if(payload.success) {
    const newState = {
      username: payload.username,
      token: payload.token,
      shouldRedirectSignIn: true,
      warning: '',
    }
    return newState;
  } else {
    return {
      ...initialState,
      warning: 'username or password invalid',
    }
  }
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: return loginUser(action.payload);
    default: return state;
  }
}

export default userReducer;
