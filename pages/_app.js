import '@/styles/globals.css';
import MagicProvider from '@/context/MagicProvider';
import { StickyNavbarProvider } from '@/context/StickyNavbarContext';
import { FormProvider } from '@/context/formContext';
import { LensProvider, development } from '@lens-protocol/react-web';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import merge from 'lodash.merge';

export default function App({ Component, pageProps }) {
  return (
    <MagicProvider>
      <FormProvider>
        <StickyNavbarProvider>
          <Component {...pageProps} />
        </StickyNavbarProvider>
      </FormProvider>
    </MagicProvider>
  );
}
