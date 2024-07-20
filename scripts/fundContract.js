const { ethers } = require("hardhat");

async function main() {
  // Get the contract address and the owner signer
  const pancakeFlashSwapAddress = "your_deployed_contract_address_here";
  const tokenAddress = "your_token_address_here"; // e.g., BUSD address
  const [owner] = await ethers.getSigners();

  // Example borrow amount and fee calculation
  const borrowAmount = ethers.utils.parseUnits("1000", 18); // Amount to borrow
  const fee = borrowAmount.mul(3).div(997).add(1); // Fee calculation

  // Get the contract instance
  const pancakeFlashSwap = await ethers.getContractAt(
    "PancakeFlashSwap",
    pancakeFlashSwapAddress
  );

  // Approve the contract to spend the owner's tokens
  const tokenContract = await ethers.getContractAt("IERC20", tokenAddress);
  await tokenContract.connect(owner).approve(pancakeFlashSwap.address, fee);
  console.log(`Approved ${fee.toString()} tokens for funding`);

  // Fund the contract with the fee amount needed
  await pancakeFlashSwap
    .connect(owner)
    .fundFlashSwapContract(owner.address, tokenAddress, fee);
  console.log(`Funded contract with ${fee.toString()} tokens`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
