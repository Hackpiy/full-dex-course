
const {ethers} = require("hardhat");

async function main() {
  const [minter] = await ethers.getSigners();
  const DogCoin = await ethers.getContractFactory("DogCoin");
  const dogcoin = await DogCoin.deploy(minter.address , "1000000000000000000000");
  await dogcoin.deployed();
  console.log(`Dogcoin Address : ${dogcoin.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
