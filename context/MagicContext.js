import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { magic } from '@/lib/magic';

const MagicContext = createContext({
  provider: null,
  initializeProvider: () => {},
});

export const useMagic = () => useContext(MagicContext);

export const MagicProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);

  const initializeProvider = async () => {
    const magicProvider = new ethers.providers.Web3Provider(
      await magic.wallet.getProvider()
    );

    setProvider(magicProvider);
  };

  useEffect(() => {
    initializeProvider();
  }, []);

  return (
    <MagicContext.Provider
      value={{
        provider,
        initializeProvider,
      }}
    >
      {children}
    </MagicContext.Provider>
  );
};
