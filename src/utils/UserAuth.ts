import { UserAction } from '../redux/actions/UserAction';
import { auth } from './Firebase';
import { store } from '../redux/store';

export const logout = async () => {
  store.dispatch(UserAction.Logout());
  const result = await auth().signOut();
  return result;
};
