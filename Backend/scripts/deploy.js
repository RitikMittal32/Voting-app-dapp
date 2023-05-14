const hre = require("hardhat");

async function main() {
  // Deploy the VotingContract
  const VotingContract = await hre.ethers.getContractFactory("VotingContract");
  const votingContract = await VotingContract.deploy();

  await votingContract.deployed();

  console.log(
    `VotingContract deployed to ${votingContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});