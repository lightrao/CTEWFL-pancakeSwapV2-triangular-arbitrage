const { ethers } = require("hardhat");

async function main() {
  // Deploy the contract
  const PancakeFlashSwap = await ethers.getContractFactory("PancakeFlashSwap");
  const pancakeFlashSwap = await PancakeFlashSwap.deploy();
  await pancakeFlashSwap.deployed();
  console.log("PancakeFlashSwap deployed to:", pancakeFlashSwap.address);

  // Get the owner signer
  const [owner] = await ethers.getSigners();

  // Example of token address you might want to deposit for covering fees
  const tokenAddress = "your_token_address_here"; // e.g., BUSD address
  const borrowAmount = ethers.utils.parseUnits("1000", 18); // Amount to borrow
  const fee = borrowAmount.mul(3).div(997).add(1); // Fee calculation

  // Approve the contract to spend the owner's tokens
  const tokenContract = await ethers.getContractAt("IERC20", tokenAddress);
  await tokenContract.connect(owner).approve(pancakeFlashSwap.address, fee);
  console.log(`Approved ${fee.toString()} tokens for funding`);

  // Fund the contract with the fee amount needed
  await pancakeFlashSwap
    .connect(owner)
    .fundFlashSwapContract(owner.address, tokenAddress, fee);
  console.log(`Funded contract with ${fee.toString()} tokens`);

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
