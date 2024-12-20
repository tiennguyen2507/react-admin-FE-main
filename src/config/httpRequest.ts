import axios from 'axios';

const axiosConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
};

export const httpRequest = axios.create(axiosConfig);

const httpRequestAuth = axios.create(axiosConfig);

httpRequestAuth.interceptors.request.use((request) => {
  const access_token = localStorage.getItem('access_token');
  if (!access_token) {
    window.location.href = '/login';
  }
  request.headers.Authorization = `Bearer ${access_token}`;
  return request;
});

httpRequestAuth.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.data.statusCode === 401) {
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default httpRequestAuth;
