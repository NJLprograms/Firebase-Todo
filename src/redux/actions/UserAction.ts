import firebase from 'firebase';
export const LOGIN_SUCCESS = '[User] LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = '[User] LOGOUT_SUCCESS';

export class UserActions {
  static Login(payload: firebase.User | null) {
    return {
      type: LOGIN_SUCCESS,
      payload,
    };
  }

  static Logout() {
    return {
      type: LOGOUT_SUCCESS,
      payload: null,
    };
  }
}
