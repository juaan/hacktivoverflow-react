import { GET_USER } from '../actions/constants';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER:{
      return state;
    }
    default: return state;
  }
}

export default userReducer;
