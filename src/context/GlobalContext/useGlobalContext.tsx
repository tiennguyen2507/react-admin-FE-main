import { Dispatch, PropsWithChildren, SetStateAction, createContext } from 'react';

type Value = { useInfo?: any };

export type GlobalContextType = {
  value: Value;
  setState: Dispatch<SetStateAction<Value>>;
};

const GlobalContext = createContext<GlobalContextType>({ value: {}, setState: () => {} });

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [value, setState] = useState<Value>({});

  return <GlobalContext.Provider value={{ value, setState }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
