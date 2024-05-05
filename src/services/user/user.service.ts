import { getUserByIdRequest } from './user.api';
import type { User } from './user.types';

export const userService = () => {
  const getUserById = async (userId: User['id']) => {
    return getUserByIdRequest(userId);
  };

  return { getUserById };
};
