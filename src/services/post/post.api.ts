import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';

export const getAllPostsRequest = async (userId: number) => {
  const { data } = await baseAPI.get<AxiosResponse>(`/users/${userId}/posts`);
  return data;
};
