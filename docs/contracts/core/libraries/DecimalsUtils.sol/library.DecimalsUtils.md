# DecimalsUtils

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/libraries/DecimalsUtils.sol)

## State Variables

### DEFAULT_DECIMALS

```solidity
uint8 internal constant DEFAULT_DECIMALS = 18;
```

### MIN_DECIMALS

```solidity
uint8 internal constant MIN_DECIMALS = 6;
```

### MAX_DECIMALS

```solidity
uint8 internal constant MAX_DECIMALS = DEFAULT_DECIMALS;
```

### SHARE_TOKEN_DECIMALS

```solidity
uint8 internal constant SHARE_TOKEN_DECIMALS = DEFAULT_DECIMALS;
```

### SHARE_TOKEN_UNIT

```solidity
uint256 internal constant SHARE_TOKEN_UNIT = 10 ** SHARE_TOKEN_DECIMALS;
```

## Functions

### \_getDecimals

```solidity
function _getDecimals(address asset) internal view returns (uint8);
```
