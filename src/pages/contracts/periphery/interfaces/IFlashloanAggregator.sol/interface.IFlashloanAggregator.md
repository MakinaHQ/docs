# IFlashloanAggregator

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IFlashloanAggregator.sol)

## Functions

### requestFlashloan

The function to request a flash loan.

```solidity
function requestFlashloan(FlashloanRequest calldata request) external;
```

**Parameters**

| Name      | Type               | Description                     |
| --------- | ------------------ | ------------------------------- |
| `request` | `FlashloanRequest` | The request for the flash loan. |

### balancerV3FlashloanCallback

Callback handler for Balancer V3 flashloan.

```solidity
function balancerV3FlashloanCallback(
    address caliber,
    ICaliber.Instruction calldata instruction,
    address token,
    uint256 amount
) external;
```

**Parameters**

| Name          | Type                   | Description                                                       |
| ------------- | ---------------------- | ----------------------------------------------------------------- |
| `caliber`     | `address`              | The address of the Caliber contract that initiated the flashloan. |
| `instruction` | `ICaliber.Instruction` | The instruction to execute.                                       |
| `token`       | `address`              | The token borrowed.                                               |
| `amount`      | `uint256`              | The amount borrowed.                                              |

## Errors

### NotCaliber

Error thrown when the caller is not a Caliber.

```solidity
error NotCaliber();
```

### NotRequested

Error thrown when the initiator is not the requested contract.

```solidity
error NotRequested();
```

### InvalidToken

Error thrown when the token is invalid.

```solidity
error InvalidToken();
```

### InvalidParamsLength

Error thrown when params length is invalid.

```solidity
error InvalidParamsLength();
```

### InvalidFeeAmount

Error thrown when the fee amount is invalid.

```solidity
error InvalidFeeAmount();
```

### NotBalancerV2Pool

Error thrown when the caller is not the Balancer V2 pool.

```solidity
error NotBalancerV2Pool();
```

### NotBalancerV3Pool

Error thrown when the caller is not the Balancer V3 pool.

```solidity
error NotBalancerV3Pool();
```

### NotMorpho

Error thrown when the caller is not the Morpho pool.

```solidity
error NotMorpho();
```

### NotDssFlash

Error thrown when the caller is not the Maker DSS Flash.

```solidity
error NotDssFlash();
```

### NotAaveV3Pool

Error thrown when the caller is not the Aave V3 pool.

```solidity
error NotAaveV3Pool();
```

### BalancerV2PoolNotSet

Error thrown when the Balancer V2 pool is not set.

```solidity
error BalancerV2PoolNotSet();
```

### BalancerV3PoolNotSet

Error thrown when the Balancer V3 pool is not set.

```solidity
error BalancerV3PoolNotSet();
```

### MorphoPoolNotSet

Error thrown when the Morpho pool is not set.

```solidity
error MorphoPoolNotSet();
```

### DaiNotSet

Error thrown when the DAI token is not set.

```solidity
error DaiNotSet();
```

### DssFlashNotSet

Error thrown when the Maker DSS Flash is not set.

```solidity
error DssFlashNotSet();
```

### AaveV3PoolNotSet

Error thrown when the Aave V3 pool is not set.

```solidity
error AaveV3PoolNotSet();
```

### InvalidUserDataHash

Error thrown when the user data hash is invalid.

```solidity
error InvalidUserDataHash();
```

## Structs

### FlashloanRequest

The struct for requesting a flash loan.

```solidity
struct FlashloanRequest {
    FlashloanProvider provider;
    ICaliber.Instruction instruction;
    address token;
    uint256 amount;
}
```

**Properties**

| Name          | Type                   | Description                     |
| ------------- | ---------------------- | ------------------------------- |
| `provider`    | `FlashloanProvider`    | The provider of the flash loan. |
| `instruction` | `ICaliber.Instruction` | The instruction to execute.     |
| `token`       | `address`              | The token to borrow.            |
| `amount`      | `uint256`              | The amount to borrow.           |

## Enums

### FlashloanProvider

The enum for the flash loan providers.

```solidity
enum FlashloanProvider {
    /// Aave V3
    AAVE_V3,
    /// Balancer V2
    BALANCER_V2,
    /// Balancer V3
    BALANCER_V3,
    /// Morpho
    MORPHO,
    /// Maker DSS Flash
    DSS_FLASH
}
```
