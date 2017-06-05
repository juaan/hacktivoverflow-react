import { combineReducers } from 'redux';

import questionReducer from './question';
import userReducer from './user';

const rootReducer = combineReducers({
  questions: questionReducer,
  user: userReducer,
});

export default rootReducer;
