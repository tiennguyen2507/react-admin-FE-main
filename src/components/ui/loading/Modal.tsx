import { Spinner } from '@nextui-org/react';
import React, { PropsWithChildren } from 'react';

export const Loading: React.FC = () => {
  return <Spinner />;
};

export const LoadingWrapper: React.FC<
  PropsWithChildren & { isLoading: boolean }
> = ({ children, isLoading }) => {
  return (
    <div className="flex justify-center items-center w-full">
      {isLoading ? <Spinner /> : children}
    </div>
  );
};
