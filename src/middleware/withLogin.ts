import httpRequestAuth from '@/config/httpRequest';
import { ContextMiddleware } from '@/config/pageConfig';

export const withLogin = async ({ globalState }: ContextMiddleware) => {
  if (globalState.value?.useInfo) {
    return true;
  }

  return await httpRequestAuth
    .get('/auth/info')
    .then(({ data }) => {
      globalState.setState({ ...globalState.value, useInfo: data });
      return true;
    })
    .catch(() => {
      return false;
    });
};
