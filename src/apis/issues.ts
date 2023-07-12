import { axiosInstance } from './instance';

export const GetIssues = async () => {
  const response = await axiosInstance.get('');
  return response.data;
};
