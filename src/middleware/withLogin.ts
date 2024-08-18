import httpRequestAuth from '@/config/httpRequest';

export const withLogin = async () => {
  return await httpRequestAuth
    .get('/auth/info')
    .then(() => true)
    .catch(() => {
      window.location.href = '/login';
      return false;
    });
};
