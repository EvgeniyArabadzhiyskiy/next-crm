'use client';

import { createContext, useContext, useRef } from 'react';

interface GlobalContextType {
  timeLine: React.MutableRefObject<gsap.core.Timeline | undefined>;
  name: React.MutableRefObject<string>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const ContexGSAP = createContext<GlobalContextType | null>(null);

export const ProviderGSAP = ({ children }: { children: React.ReactNode }) => {
  const timeLine = useRef();
  const user = useRef('');

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ContexGSAP.Provider
      value={{
        timeLine: timeLine,
        name: user,
        containerRef: containerRef,
      }}
    >
      {children}
    </ContexGSAP.Provider>
  );
};

export const useGlobalState = () => useContext(ContexGSAP)!;
