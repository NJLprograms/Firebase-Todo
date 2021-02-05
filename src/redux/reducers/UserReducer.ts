import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/UserAction';

const initialState = null;

export const userReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return action.payload || state;
    }
    case LOGOUT_SUCCESS: {
      return null;
    }
    default:
      return state;
  }
};
