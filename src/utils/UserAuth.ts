import { auth } from './Firebase';

export const logout = () => {
  return auth.signOut();
};
