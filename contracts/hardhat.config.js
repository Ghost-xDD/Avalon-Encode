const { task } = require('hardhat/config');

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');

const dotenv = require('dotenv').config();
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

task('accounts', 'Prints The List Of Accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      // See its defaults
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/dr5vLsOXr4NfxpbG12n_xWHIoDQbf_ZD',
      accounts: [privateKey],
      chainId: 80001,
      // gasPrice: 8000000000, // 8 Gwei
    },
  },
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // etherscan: {
  //   apiKey: {
  //     avalancheFuji: 'abc',
  //   },
  //   customChains: [
  //     {
  //       network: 'avalancheFuji',
  //       chainId: 43113,
  //       urls: {
  //         apiURL: '',
  //         browserURL: '',
  //       },
  //     },
  //   ],
  // },
};
