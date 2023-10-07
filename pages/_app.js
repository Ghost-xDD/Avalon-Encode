import '@/styles/globals.css';
import MagicProvider from '@/context/MagicProvider';
import { StickyNavbarProvider } from '@/context/StickyNavbarContext';
import { FormProvider } from '@/context/formContext';
import { goerli } from '@wagmi/chains';
import { LensProvider, development } from '@lens-protocol/react-web';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import merge from 'lodash.merge';

const { provider, chains } = configureChains(
  [goerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [injectedWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <MagicProvider>
        <FormProvider>
          <StickyNavbarProvider>
            <Component {...pageProps} />
          </StickyNavbarProvider>
        </FormProvider>
      </MagicProvider>
    </WagmiConfig>
  );
}
