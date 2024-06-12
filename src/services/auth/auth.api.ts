import { baseAPI } from '../../lib/axios.instance';
import type { User } from '../user/user.types';
import type { LoginUser } from './auth.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginRequest = async (_loginUserData: LoginUser) => {
  const { data: user } = await baseAPI.get<User>(
    `/users/${Math.floor(Math.random() * 10) + 1}`,
  );
  const token = '';

  return {
    user,
    token,
  };
};
