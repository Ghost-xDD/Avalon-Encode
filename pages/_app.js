import '@/styles/globals.css';
import MagicProvider from '@/context/MagicProvider';
import { StickyNavbarProvider } from '@/context/StickyNavbarContext';
import { FormProvider } from '@/context/formContext';
import { LensProvider, development } from '@lens-protocol/react-web';

const lensConfig = {
  environment: development,
};

export default function App({ Component, pageProps }) {
  return (
    <MagicProvider>
      <LensProvider config={lensConfig}>
        <FormProvider>
          <StickyNavbarProvider>
            <Component {...pageProps} />
          </StickyNavbarProvider>
        </FormProvider>
      </LensProvider>
    </MagicProvider>
  );
}
