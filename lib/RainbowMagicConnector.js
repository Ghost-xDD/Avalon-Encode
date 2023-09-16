import { MagicAuthConnector } from '@magiclabs/wagmi-connector';

export const rainbowMagicConnector = ({ chains }) => ({
  id: 'magic',
  name: 'Magic',
  iconUrl: 'https://svgshare.com/i/pXA.svg',
  iconBackground: 'white',
  createConnector: () => ({
    connector: new MagicAuthConnector({
      chains,
      options: {
        apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY,
        oauthOptions: {
          providers: ['google', 'facebook', 'twitter', 'discord'],
        },
        isDarkMode: false,
        magicSdkConfiguration: {
          network: {
            rpcUrl: 'https://rpc.ankr.com/eth',
            chainId: 1,
          },
        },
      },
    }),
  }),
});
