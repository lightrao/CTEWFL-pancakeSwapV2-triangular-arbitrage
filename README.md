# Flash Loan - PancaakeSwap V2 Triangular Arbitrage

This project demonstrates PancaakeSwap V2 Triangular Arbitrage

## Configuring Hardhat

run:

```shell
git clone <repository_url>
cd <repository_directory>
```

```shell
npm ci
npx hardhat
```

create files `./contracts/FlashSwap.sol`, `./test/tester.js`, `./scripts/deploy.js`
create folers `./contracts/interfaces`, `./contracts/libraries`, `./utils` and files in them
edit file `hardhat.config.js`, add solidity compilers in diffrent versions, add some networks

## Testing Hardhat Changes are Working

edit files `./contracts/FlashSwap.sol`,`./scripts/deploy.js`, `./test/tester.js`
run:

```shell
npx hardhat test
npx hardhat node
npx hardhat clean
```

## About Interfaces and Libraries

edit file `./contracts/FlashSwap.sol`

## State Variables and Basic Functions

edit file `./contracts/FlashSwap.sol`

## Start Arbitrage Function Calling Flash Loan

edit file `./contracts/FlashSwap.sol`, add `startArbitrage` funciton

## Paying Back Our Loan

edit file `./contracts/FlashSwap.sol`, edit `pancakeCall` funciton
run:

```shell
npx hardhat compile
npx hardhat clean
```
