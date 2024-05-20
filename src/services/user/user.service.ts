import { getUserByIdRequest } from './user.api';
import { userSchema } from './user.schemas';
import type { User } from './user.types';

export const userService = () => {
  const getUserById = async (userId: User['id']) => {
    const data = await getUserByIdRequest(userId);
    return userSchema.parse(data);
  };

  return { getUserById };
};
