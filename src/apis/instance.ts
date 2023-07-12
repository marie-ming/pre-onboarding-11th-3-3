import axios from 'axios';

const API_BASE_URL = 'https://api.github.com/repos/facebook/react/issues';

const axiosApi = (url: string) => {
  const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/vnd.github+json' },
  });

  instance.interceptors.request.use(config => {
    const accessToken = process.env.REACT_APP_ASSESSTOKEN;
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });

  return instance;
};

export const axiosInstance = axiosApi(API_BASE_URL);
