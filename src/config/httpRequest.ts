import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://nest-study.adaptable.app/',
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

httpRequestAuth.interceptors.response.use((response) => {
  return response;
});

export default httpRequestAuth;
