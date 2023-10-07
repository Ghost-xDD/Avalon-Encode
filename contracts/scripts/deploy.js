// deploy.js
const { ethers } = require("hardhat");

async function main() {
  // Deploy GalenV3 contract
  const AvalonV3 = await ethers.getContractFactory("AvalonV3");
  const avalonV3 = await AvalonV3.deploy("AvalonV3", "AVL3");
  await avalonV3.deployed();

  console.log("AvalonV3 deployed to:", avalonV3.address);
}

// AvalonV3 deployed to: 0x2f58f4561Bd16ae7714f98893b32Ab9Bb4e0A38c

// AvalonUserRegistration deployed to: 0x52902c3F0c1FF1a97eDf0fe2b59aE7411F389e9A

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
