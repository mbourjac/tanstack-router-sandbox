import { baseAPI } from '../../lib/axios.instance';
import type { User } from './user.types';

export const getUserByIdRequest = async (userId: number) => {
  const { data } = await baseAPI.get<User>(`/users/${userId}`);

  return data;
};
