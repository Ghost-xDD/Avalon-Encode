// deploy.js
const { ethers } = require('hardhat');

async function main() {
  // Deploy avalonUserRegistration contract
  const AvalonUserRegistration = await ethers.getContractFactory(
    'AvalonUserRegistration'
  );
  const avalonUserRegistration = await AvalonUserRegistration.deploy();
  await avalonUserRegistration.deployed();

  console.log(
    'AvalonUserRegistration deployed to:',
    avalonUserRegistration.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
