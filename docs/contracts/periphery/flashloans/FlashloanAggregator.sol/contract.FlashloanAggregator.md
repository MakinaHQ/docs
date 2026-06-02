# FlashloanAggregator

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/flashloans/FlashloanAggregator.sol)

**Inherits:**
[IFlashloanAggregator](/contracts/periphery/interfaces/IFlashloanAggregator.sol/interface.IFlashloanAggregator.md), BalancerV2FlashloanRecipient, IMorphoFlashLoanCallback, IERC3156FlashBorrower, IFlashLoanSimpleReceiver

## State Variables

### EXPECTED_DATA_HASH_SLOT

```solidity
bytes32 private constant EXPECTED_DATA_HASH_SLOT =
    0x1cdc327c404943fa68ab4aca3860b62126227055e2873c38c2fe6dd350687a00
```

### caliberFactory

The address of the Caliber factory.

```solidity
address public immutable caliberFactory
```

### balancerV2Pool

The address of the Balancer V2 pool.

```solidity
address public immutable balancerV2Pool
```

### balancerV3Pool

The address of the Balancer V3 pool.

```solidity
address public immutable balancerV3Pool
```

### morphoPool

The address of the Morpho pool.

```solidity
address public immutable morphoPool
```

### dai

The address of the DAI token.

```solidity
address public immutable dai
```

### dssFlash

The address of the Maker DSS Flash.

```solidity
address public immutable dssFlash
```

### aaveV3AddressProvider

The address of the Aave V3 address provider.

```solidity
address public immutable aaveV3AddressProvider
```

## Functions

### onlyCaliber

Modifier to check if the caller is a Caliber.

```solidity
modifier onlyCaliber() ;
```

### constructor

The constructor for the FlashloanAggregator.

```solidity
constructor(
    address _caliberFactory,
    address _balancerV2Pool,
    address _balancerV3Pool,
    address _morphoPool,
    address _dssFlash,
    address _aaveV3AddressProvider,
    address _dai
) ;
```

**Parameters**

| Name                     | Type      | Description                                  |
| ------------------------ | --------- | -------------------------------------------- |
| `_caliberFactory`        | `address` | The address of the Caliber factory.          |
| `_balancerV2Pool`        | `address` | The address of the Balancer V2 pool.         |
| `_balancerV3Pool`        | `address` | The address of the Balancer V3 pool.         |
| `_morphoPool`            | `address` | The address of the Morpho pool.              |
| `_dssFlash`              | `address` | The address of the Maker DSS Flash.          |
| `_aaveV3AddressProvider` | `address` | The address of the Aave V3 address provider. |
| `_dai`                   | `address` | The address of the DAI token.                |

### requestFlashloan

The function to request a flash loan.

```solidity
function requestFlashloan(FlashloanRequest calldata request) external override onlyCaliber;
```

**Parameters**

| Name      | Type               | Description                     |
| --------- | ------------------ | ------------------------------- |
| `request` | `FlashloanRequest` | The request for the flash loan. |

### \_dispatchFlashloanRequest

Function to dispatch the flashloan request to the correct provider.

```solidity
function _dispatchFlashloanRequest(FlashloanRequest calldata request) internal;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

### \_clearExpectedDataHash

Internal function to clear the expected data hash.

```solidity
function _clearExpectedDataHash() internal;
```

### \_setExpectedDataHash

Internal function to set the expected data hash.

```solidity
function _setExpectedDataHash(bytes memory data) internal;
```

**Parameters**

| Name   | Type    | Description                                |
| ------ | ------- | ------------------------------------------ |
| `data` | `bytes` | The data to set the expected data hash to. |

### \_isValidExpectedDataHash

Internal function to check if the expected data hash is valid.

```solidity
function _isValidExpectedDataHash(bytes memory data) internal view;
```

**Parameters**

| Name   | Type    | Description                                       |
| ------ | ------- | ------------------------------------------------- |
| `data` | `bytes` | The data to check the expected data hash against. |

### \_requestBalancerV2Flashloan

Function to request a flashloan from Balancer V2.

```solidity
function _requestBalancerV2Flashloan(FlashloanRequest calldata request) internal;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

### \_requestBalancerV3Flashloan

Function to request a flashloan from Balancer V3.

```solidity
function _requestBalancerV3Flashloan(FlashloanRequest calldata request) internal;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

### \_requestMorphoFlashloan

Function to request a flashloan from Morpho.

```solidity
function _requestMorphoFlashloan(FlashloanRequest calldata request) internal;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

### \_requestDssFlashloan

Function to request a flashloan from Maker DSS Flash.

```solidity
function _requestDssFlashloan(FlashloanRequest calldata request) internal;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

### \_requestAaveV3Flashloan

Function to request a flashloan from Aave V3.

```solidity
function _requestAaveV3Flashloan(FlashloanRequest calldata request) internal;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

### \_handleFlashloanCallback

Catch-all function to handle the flashloan callback.

```solidity
function _handleFlashloanCallback(
    address caliber,
    ICaliber.Instruction memory instruction,
    address token,
    uint256 amount
) internal;
```

**Parameters**

| Name          | Type                   | Description                 |
| ------------- | ---------------------- | --------------------------- |
| `caliber`     | `address`              | The address of the Caliber. |
| `instruction` | `ICaliber.Instruction` | The instruction to execute. |
| `token`       | `address`              | The token to flashloan.     |
| `amount`      | `uint256`              | The amount to flashloan.    |

### receiveFlashLoan

```solidity
function receiveFlashLoan(
    BalancerIERC20[] memory tokens,
    uint256[] memory amounts,
    uint256[] memory feeAmounts,
    bytes memory userData
) external override;
```

### balancerV3FlashloanCallback

Callback handler for Balancer V3 flashloan.

```solidity
function balancerV3FlashloanCallback(
    address caliber,
    ICaliber.Instruction calldata instruction,
    address token,
    uint256 amount
) external override;
```

**Parameters**

| Name          | Type                   | Description                                                       |
| ------------- | ---------------------- | ----------------------------------------------------------------- |
| `caliber`     | `address`              | The address of the Caliber contract that initiated the flashloan. |
| `instruction` | `ICaliber.Instruction` | The instruction to execute.                                       |
| `token`       | `address`              | The token borrowed.                                               |
| `amount`      | `uint256`              | The amount borrowed.                                              |

### onMorphoFlashLoan

Callback called when a flash loan occurs.

The callback is called only if data is not empty.

```solidity
function onMorphoFlashLoan(uint256 assets, bytes calldata data) external override;
```

**Parameters**

| Name     | Type      | Description                                        |
| -------- | --------- | -------------------------------------------------- |
| `assets` | `uint256` | The amount of assets that was flash loaned.        |
| `data`   | `bytes`   | Arbitrary data passed to the `flashLoan` function. |

### onFlashLoan

Receive a flash loan.

```solidity
function onFlashLoan(address initiator, address token, uint256 amount, uint256 fee, bytes calldata data)
    external
    override
    returns (bytes32);
```

**Parameters**

| Name        | Type      | Description                                                            |
| ----------- | --------- | ---------------------------------------------------------------------- |
| `initiator` | `address` | The initiator of the loan.                                             |
| `token`     | `address` | The loan currency.                                                     |
| `amount`    | `uint256` | The amount of tokens lent.                                             |
| `fee`       | `uint256` | The additional amount of tokens to repay.                              |
| `data`      | `bytes`   | Arbitrary data structure, intended to contain user-defined parameters. |

**Returns**

| Name     | Type      | Description                                              |
| -------- | --------- | -------------------------------------------------------- |
| `<none>` | `bytes32` | The keccak256 hash of "ERC3156FlashBorrower.onFlashLoan" |

### executeOperation

Executes an operation after receiving the flash-borrowed asset

Ensure that the contract can return the debt + premium, e.g., has
enough funds to repay and has approved the Pool to pull the total amount

```solidity
function executeOperation(address asset, uint256 amount, uint256 premium, address initiator, bytes calldata params)
    external
    override
    returns (bool);
```

**Parameters**

| Name        | Type      | Description                                                  |
| ----------- | --------- | ------------------------------------------------------------ |
| `asset`     | `address` | The address of the flash-borrowed asset                      |
| `amount`    | `uint256` | The amount of the flash-borrowed asset                       |
| `premium`   | `uint256` | The fee of the flash-borrowed asset                          |
| `initiator` | `address` | The address of the flashloan initiator                       |
| `params`    | `bytes`   | The byte-encoded params passed when initiating the flashloan |

**Returns**

| Name     | Type   | Description                                                      |
| -------- | ------ | ---------------------------------------------------------------- |
| `<none>` | `bool` | True if the execution of the operation succeeds, false otherwise |

### ADDRESSES_PROVIDER

```solidity
function ADDRESSES_PROVIDER() external view override returns (IPoolAddressesProvider);
```

### POOL

```solidity
function POOL() external view override returns (IPool);
```
