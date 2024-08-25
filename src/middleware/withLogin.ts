import httpRequestAuth from '@/config/httpRequest';

export const withLogin = async () => {
  return await httpRequestAuth
    .get('/auth/info')
    .then(() => true)
    .catch(() => {
      return false;
    });
};
