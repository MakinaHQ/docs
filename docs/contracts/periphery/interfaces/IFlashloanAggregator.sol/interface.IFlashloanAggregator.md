# IFlashloanAggregator

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/interfaces/IFlashloanAggregator.sol)

The interface for the flashloan aggregator.

## Functions

### requestFlashloan

The function to request a flashloan.

```solidity
function requestFlashloan(FlashloanRequest calldata request) external;
```

**Parameters**

| Name      | Type               | Description                    |
| --------- | ------------------ | ------------------------------ |
| `request` | `FlashloanRequest` | The request for the flashloan. |

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

The struct for requesting a flashloan.

```solidity
struct FlashloanRequest {
    FlashloanProvider provider;
    ICaliber.Instruction instruction;
    address token;
    uint256 amount;
}
```

**Properties**

| Name          | Type                   | Description                    |
| ------------- | ---------------------- | ------------------------------ |
| `provider`    | `FlashloanProvider`    | The provider of the flashloan. |
| `instruction` | `ICaliber.Instruction` | The instruction to execute.    |
| `token`       | `address`              | The token to borrow.           |
| `amount`      | `uint256`              | The amount to borrow.          |

## Enums

### FlashloanProvider

The enum for the flashloan providers.

```solidity
enum FlashloanProvider {
    AAVE_V3,
    BALANCER_V2,
    BALANCER_V3,
    MORPHO,
    DSS_FLASH
}
```
