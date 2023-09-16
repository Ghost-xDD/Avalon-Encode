import '@/styles/globals.css';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { goerli } from 'wagmi/chains';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import merge from 'lodash.merge';
import { FormProvider } from '@/context/formContext';
import { DataProvider } from '@/context/DataContext';
import { StickyNavbarProvider } from '@/context/StickyNavbarContext';
import { MagicProvider } from '@/context/MagicContext';
import { UserProvider } from '@/context/UserContext';

const { provider, chains } = configureChains(
  [goerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID;

const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      coinbaseWallet({ chains, appName: 'Avalon' }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#A020F0',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme} coolMode>
        <FormProvider>
          <DataProvider>
            <StickyNavbarProvider>
              <MagicProvider>
                <UserProvider>
                  <Component {...pageProps} />
                </UserProvider>
              </MagicProvider>
            </StickyNavbarProvider>
          </DataProvider>
        </FormProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
