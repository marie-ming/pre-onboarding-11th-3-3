import { axiosInstance } from './instance';

interface getIssueType {
  page: number;
  sort: string;
}

export const GetIssues = async ({ page, sort }: getIssueType) => {
  const response = await axiosInstance({
    method: 'GET',
    params: { page, sort },
  });
  return response.data;
};
