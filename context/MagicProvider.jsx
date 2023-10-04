import { createContext, useContext, useEffect, useState } from 'react';
import { Magic } from 'magic-sdk';
import { ethers } from 'ethers';


export const MagicContext = createContext({
  magic: null,
  ethersProvider: null,
});

export const useMagicContext = () => useContext(MagicContext);

const MagicProvider = ({ children }) => {
  const [magicInstance, setMagicInstance] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY) {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
        network: {
          rpcUrl:
            'https://polygon-mumbai.g.alchemy.com/v2/dr5vLsOXr4NfxpbG12n_xWHIoDQbf_ZD',
          chainId: 80001,
        },
      });

      setMagicInstance(magic);

      // Using ethers with Magic's rpcProvider
      const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
      setEthersProvider(provider);
    }
  }, []);

  // console.log(magicInstance);
  // console.log(ethersProvider);

  return (
    <MagicContext.Provider
      value={{
        magic: magicInstance,
        ethersProvider: ethersProvider,
      }}
    >
      {children}
    </MagicContext.Provider>
  );
};

export default MagicProvider;
