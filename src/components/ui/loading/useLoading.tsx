import { PropsWithChildren } from 'react';
import { Loading, LoadingWrapper } from './Modal';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  return {
    isLoading,
    setIsLoading,
    Loading,
    LoadingWrapper: ({ children }: PropsWithChildren) => (
      <LoadingWrapper children={children} isLoading={isLoading} />
    ),
  };
};
