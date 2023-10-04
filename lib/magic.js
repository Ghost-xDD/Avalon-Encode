import { Magic } from 'magic-sdk';

let magic;

if (typeof window !== 'undefined') {
  const apiKey = process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY;

  magic = new Magic(apiKey, {
    network: {
      rpcUrl:
        'https://polygon-mumbai.g.alchemy.com/v2/dr5vLsOXr4NfxpbG12n_xWHIoDQbf_ZD',
      chainId: 80001,
    },
  });
}

export { magic };
