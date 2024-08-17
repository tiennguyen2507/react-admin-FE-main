import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://nest-study.adaptable.app/',
  timeout: 60000,
});

httpRequest.interceptors.request.use((request) => {
  return request;
});

httpRequest.interceptors.response.use((response) => {
  return response;
});

export default httpRequest;
