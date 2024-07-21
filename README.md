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

## Structuring Javascript Variables

edit file `./test/tester`

## Funding Our Smart Contract In Before Each

edit file `./test/tester`
run:

```shell
npx hardhat test
```

## Checking Smart Contract is Funded

edit file `./test/tester`
run:

```shell
npx hardhat test
```

## Testing Our Loan and Payback Is Working

edit file `./test/tester`
run:

```shell
source .env
npx hardhat node --fork ${RPC_MAINNET}
```

```shell
npx hardhat test --network localhost
npx hardhat test --network hardhat
npx hardhat test
```

## Add some scripts in `./scripts` folder

```shell
npx hardhat run scripts/deploy.js --network yourNetwork
npx hardhat run scripts/fundContract.js --network yourNetwork
npx hardhat run scripts/startArbitrage.js --network yourNetwork
```

## Writing Our Trading Function

edit file `./contracts/FlashSwap.sol`
