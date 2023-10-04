import '@/styles/globals.css';
import MagicProvider from '@/context/MagicProvider';
import { StickyNavbarProvider } from '@/context/StickyNavbarContext';
import { FormProvider } from '@/context/formContext';

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
