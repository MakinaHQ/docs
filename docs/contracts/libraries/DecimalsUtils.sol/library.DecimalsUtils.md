# DecimalsUtils

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/libraries/DecimalsUtils.sol)

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
function _getDecimals(address asset_) internal view returns (uint8);
```
