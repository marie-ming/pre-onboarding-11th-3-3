import { axiosInstance } from './instance';

export const GetIssues = async (page: string) => {
  const response = await axiosInstance({ method: 'GET', params: { page } });
  return response.data;
};
