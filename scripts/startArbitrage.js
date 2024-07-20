const { ethers } = require("hardhat");

async function main() {
  // Get the contract address and the owner signer
  const pancakeFlashSwapAddress = "your_deployed_contract_address_here";
  const tokenAddress = "your_token_address_here"; // e.g., BUSD address
  const [owner] = await ethers.getSigners();

  // Example borrow amount
  const borrowAmount = ethers.utils.parseUnits("1000", 18); // Amount to borrow

  // Get the contract instance
  const pancakeFlashSwap = await ethers.getContractAt(
    "PancakeFlashSwap",
    pancakeFlashSwapAddress
  );

  // Initiate arbitrage
  const tx = await pancakeFlashSwap
    .connect(owner)
    .startArbitrage(tokenAddress, borrowAmount);
  await tx.wait();

  console.log("Arbitrage started");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
